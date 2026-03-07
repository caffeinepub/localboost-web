import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import List "mo:core/List";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Iter "mo:core/Iter";


actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type DemoRequest = {
    id : Text;
    businessName : Text;
    businessType : Text;
    phoneNumber : Text;
    language : Text;
    message : ?Text;
    status : Text;
    previewSlug : Text;
    createdAt : Time.Time;
    expiresAt : Time.Time;
  };

  type AuditRequest = {
    id : Text;
    websiteOrMapsUrl : Text;
    name : ?Text;
    phoneNumber : ?Text;
    createdAt : Time.Time;
  };

  type ContactMessage = {
    id : Text;
    name : Text;
    email : Text;
    message : Text;
    createdAt : Time.Time;
  };

  type SiteSettings = {
    basicPrice : Nat;
    businessPrice : Nat;
    advancedPrice : Nat;
    analyticsId : Text;
    workingHours : Text;
    heroHeadline : Text;
    heroSubheadline : Text;
  };

  public type UserProfile = {
    name : Text;
  };

  let demoRequests = Map.empty<Text, DemoRequest>();
  let auditRequests = Map.empty<Text, AuditRequest>();
  let contactMessages = Map.empty<Text, ContactMessage>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var siteSettings : SiteSettings = {
    basicPrice = 500;
    businessPrice = 1500;
    advancedPrice = 2500;
    analyticsId = "";
    workingHours = "Mon-Fri 9am-5pm";
    heroHeadline = "High-Performing Websites for Local Businesses";
    heroSubheadline = "Beautiful, affordable websites built for growth";
  };

  func generateId() : Text {
    let id = Time.now().toText();
    id;
  };

  func generatePreviewSlug(businessName : Text) : Text {
    let namePart = businessName.toLower().replace(#char ' ', "-");
    let timestampPart = Time.now().toText();
    namePart # "-" # timestampPart;
  };

  // User profile functions

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public functions - accessible to all including anonymous users

  public shared ({ caller }) func submitDemoRequest(businessName : Text, businessType : Text, phoneNumber : Text, language : Text, message : ?Text) : async Text {
    let id = generateId();
    let previewSlug = generatePreviewSlug(businessName);
    let createdAt = Time.now();
    let expiresAt = createdAt + 7 * 24 * 60 * 60 * 1000000000;

    // Rate limit check
    let _ThirtyDaysNanos = 30 * 24 * 60 * 60 * 1000000000;
    let recentRequests = demoRequests.values().filter(
      func(r) {
        r.phoneNumber == phoneNumber and (createdAt - r.createdAt) < _ThirtyDaysNanos
      }
    );

    if (recentRequests.size() >= 3) {
      Runtime.trap("Rate limit exceeded: Max 3 submissions per 30 days");
    };

    let demoRequest : DemoRequest = {
      id;
      businessName;
      businessType;
      phoneNumber;
      language;
      message;
      status = "New";
      previewSlug;
      createdAt;
      expiresAt;
    };

    demoRequests.add(id, demoRequest);
    previewSlug;
  };

  public shared ({ caller }) func submitAuditRequest(websiteOrMapsUrl : Text, name : ?Text, phoneNumber : ?Text) : async () {
    let id = generateId();
    let auditRequest : AuditRequest = {
      id;
      websiteOrMapsUrl;
      name;
      phoneNumber;
      createdAt = Time.now();
    };
    auditRequests.add(id, auditRequest);
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let id = generateId();
    let contactMessage : ContactMessage = {
      id;
      name;
      email;
      message;
      createdAt = Time.now();
    };
    contactMessages.add(id, contactMessage);
  };

  public query ({ caller }) func getPreviewBySlug(slug : Text) : async ?DemoRequest {
    let currentTime = Time.now();
    let matchingRequest = demoRequests.values().find(
      func(r) {
        r.previewSlug == slug and r.expiresAt > currentTime
      }
    );
    matchingRequest;
  };

  // Admin-only functions

  public query ({ caller }) func getAllDemoRequests() : async [DemoRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    demoRequests.values().toArray();
  };

  public query ({ caller }) func getAllAuditRequests() : async [AuditRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    auditRequests.values().toArray();
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    contactMessages.values().toArray();
  };

  public shared ({ caller }) func updateDemoRequestStatus(id : Text, status : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    switch (demoRequests.get(id)) {
      case (null) { Runtime.trap("Demo request not found") };
      case (?demoRequest) {
        let updatedDemoRequest = { demoRequest with status };
        demoRequests.add(id, updatedDemoRequest);
      };
    };
  };

  public query ({ caller }) func getSiteSettings() : async SiteSettings {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    siteSettings;
  };

  public shared ({ caller }) func updateSiteSettings(newSettings : SiteSettings) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    siteSettings := newSettings;
  };

  public shared ({ caller }) func extendPreviewExpiry(id : Text, days : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    switch (demoRequests.get(id)) {
      case (null) { Runtime.trap("Demo request not found") };
      case (?demoRequest) {
        let extendedExpiresAt = demoRequest.expiresAt + days * 24 * 60 * 60 * 1000000000;
        let updatedDemoRequest = { demoRequest with expiresAt = extendedExpiresAt };
        demoRequests.add(id, updatedDemoRequest);
      };
    };
  };
};
