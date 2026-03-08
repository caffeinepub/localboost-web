import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UpiSettings {
    upiName: string;
    upiId: string;
    paymentsEnabled: boolean;
}
export interface PaymentOrderStatus {
    id: string;
    status: string;
    appLink: string;
    createdAt: Time;
    amount: bigint;
    planName: string;
}
export interface SiteSettings {
    googleReviewCount: string;
    googleRating: string;
    basicPrice: bigint;
    analyticsId: string;
    googleBusinessUrl: string;
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
export interface AuditRequest {
    id: string;
    websiteOrMapsUrl: string;
    name?: string;
    createdAt: Time;
    phoneNumber?: string;
}
export interface PortfolioItem {
    id: string;
    status: string;
    title: string;
    thumbnailUrl: string;
    createdAt: Time;
    businessType: string;
    description: string;
    liveUrl: string;
    pages: Array<string>;
}
export interface PaymentOrder {
    id: string;
    status: string;
    clientName: string;
    appLink: string;
    createdAt: Time;
    clientPhone: string;
    utrNumber: string;
    amount: bigint;
    planName: string;
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
export interface Testimonial {
    id: string;
    status: string;
    name: string;
    createdAt: Time;
    text: string;
    businessType: string;
    photoUrl?: string;
    rating: bigint;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addPortfolioItem(title: string, businessType: string, description: string, liveUrl: string, thumbnailUrl: string, pages: Array<string>, status: string): Promise<string>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deletePortfolioItem(id: string): Promise<void>;
    extendPreviewExpiry(id: string, days: bigint): Promise<void>;
    getAllAuditRequests(): Promise<Array<AuditRequest>>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllDemoRequests(): Promise<Array<DemoRequest>>;
    getAllPaymentOrders(): Promise<Array<PaymentOrder>>;
    getAllPortfolioItems(): Promise<Array<PortfolioItem>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getApprovedTestimonials(): Promise<Array<Testimonial>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getPaymentOrderStatus(orderId: string): Promise<PaymentOrderStatus | null>;
    getPreviewBySlug(slug: string): Promise<DemoRequest | null>;
    getPublicPortfolioItems(): Promise<Array<PortfolioItem>>;
    getSiteSettings(): Promise<SiteSettings>;
    getUpiSettings(): Promise<UpiSettings>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitAuditRequest(websiteOrMapsUrl: string, name: string | null, phoneNumber: string | null): Promise<void>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
    submitDemoRequest(businessName: string, businessType: string, phoneNumber: string, language: string, message: string | null): Promise<string>;
    submitPaymentOrder(clientName: string, clientPhone: string, planName: string, amount: bigint, utrNumber: string): Promise<string>;
    submitTestimonial(name: string, businessType: string, rating: bigint, text: string, photoUrl: string | null): Promise<void>;
    updateDemoRequestStatus(id: string, status: string): Promise<void>;
    updatePaymentOrderStatus(id: string, status: string, appLink: string): Promise<void>;
    updatePortfolioItem(id: string, title: string, businessType: string, description: string, liveUrl: string, thumbnailUrl: string, pages: Array<string>, status: string): Promise<void>;
    updateSiteSettings(newSettings: SiteSettings): Promise<void>;
    updateTestimonialStatus(id: string, status: string): Promise<void>;
    updateUpiSettings(newSettings: UpiSettings): Promise<void>;
}
