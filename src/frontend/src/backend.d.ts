import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AuditRequest {
    id: string;
    websiteOrMapsUrl: string;
    name?: string;
    createdAt: Time;
    phoneNumber?: string;
}
export interface SiteSettings {
    basicPrice: bigint;
    analyticsId: string;
    workingHours: string;
    heroSubheadline: string;
    businessPrice: bigint;
    heroHeadline: string;
    advancedPrice: bigint;
}
export type Time = bigint;
export interface ContactMessage {
    id: string;
    name: string;
    createdAt: Time;
    email: string;
    message: string;
}
export interface DemoRequest {
    id: string;
    status: string;
    expiresAt: Time;
    createdAt: Time;
    businessName: string;
    businessType: string;
    language: string;
    message?: string;
    previewSlug: string;
    phoneNumber: string;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    extendPreviewExpiry(id: string, days: bigint): Promise<void>;
    getAllAuditRequests(): Promise<Array<AuditRequest>>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllDemoRequests(): Promise<Array<DemoRequest>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getPreviewBySlug(slug: string): Promise<DemoRequest | null>;
    getSiteSettings(): Promise<SiteSettings>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitAuditRequest(websiteOrMapsUrl: string, name: string | null, phoneNumber: string | null): Promise<void>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
    submitDemoRequest(businessName: string, businessType: string, phoneNumber: string, language: string, message: string | null): Promise<string>;
    updateDemoRequestStatus(id: string, status: string): Promise<void>;
    updateSiteSettings(newSettings: SiteSettings): Promise<void>;
}
