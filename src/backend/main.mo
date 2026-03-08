import Time "mo:core/Time";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

import Int "mo:core/Int";
import Order "mo:core/Order";


actor {
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
    googleRating : Text;
    googleReviewCount : Text;
    googleBusinessUrl : Text;
  };

  type UserProfile = {
    name : Text;
  };

  type Testimonial = {
    id : Text;
    name : Text;
    businessType : Text;
    rating : Nat;
    text : Text;
    photoUrl : ?Text;
    status : Text;
    createdAt : Time.Time;
  };

  type UpiSettings = {
    upiId : Text;
    upiName : Text;
    paymentsEnabled : Bool;
  };

  type PaymentOrder = {
    id : Text;
    clientName : Text;
    clientPhone : Text;
    planName : Text;
    amount : Nat;
    utrNumber : Text;
    status : Text;
    appLink : Text;
    createdAt : Time.Time;
  };

  type PaymentOrderStatus = {
    id : Text;
    planName : Text;
    amount : Nat;
    status : Text;
    appLink : Text;
    createdAt : Time.Time;
  };

  type PortfolioItem = {
    id : Text;
    title : Text;
    businessType : Text;
    description : Text;
    liveUrl : Text;
    thumbnailUrl : Text;
    pages : [Text];
    status : Text;
    createdAt : Time.Time;
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let demoRequests = Map.empty<Text, DemoRequest>();
  let auditRequests = Map.empty<Text, AuditRequest>();
  let contactMessages = Map.empty<Text, ContactMessage>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let testimonials = Map.empty<Text, Testimonial>();
  let paymentOrders = Map.empty<Text, PaymentOrder>();
  let portfolioItems = Map.empty<Text, PortfolioItem>();

  var siteSettings : SiteSettings = {
    basicPrice = 500;
    businessPrice = 1500;
    advancedPrice = 2500;
    analyticsId = "";
    workingHours = "Mon-Fri 9am-5pm";
    heroHeadline = "High-Performing Websites for Local Businesses";
    heroSubheadline = "Beautiful, affordable websites built for growth";
    googleRating = "";
    googleReviewCount = "";
    googleBusinessUrl = "";
  };

  var upiSettings : UpiSettings = {
    upiId = "";
    upiName = "";
    paymentsEnabled = false;
  };

  func generateId() : Text {
    Time.now().toText();
  };

  func generatePreviewSlug(businessName : Text) : Text {
    let namePart = businessName.toLower().replace(#char ' ', "-");
    let timestampPart = Time.now().toText();
    namePart # "-" # timestampPart;
  };

  // User profile functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
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
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public functions accessible to all users
  public shared ({ caller }) func submitDemoRequest(
    businessName : Text,
    businessType : Text,
    phoneNumber : Text,
    language : Text,
    message : ?Text,
  ) : async Text {
    let id = generateId();
    let previewSlug = generatePreviewSlug(businessName);
    let createdAt = Time.now();
    let expiresAt = createdAt + 7 * 24 * 60 * 60 * 1000000000;

    let recentRequests = demoRequests.values().filter(
      func(r) {
        r.phoneNumber == phoneNumber and (createdAt - r.createdAt) < 30 * 24 * 60 * 60 * 1000000000
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
    demoRequests.values().find(
      func(r) {
        r.previewSlug == slug and r.expiresAt > currentTime
      }
    );
  };

  // Testimonials functions
  public shared ({ caller }) func submitTestimonial(
    name : Text,
    businessType : Text,
    rating : Nat,
    text : Text,
    photoUrl : ?Text,
  ) : async () {
    let id = generateId();
    let testimonial : Testimonial = {
      id;
      name;
      businessType;
      rating;
      text;
      photoUrl;
      status = "pending";
      createdAt = Time.now();
    };
    testimonials.add(id, testimonial);
  };

  public query ({ caller }) func getApprovedTestimonials() : async [Testimonial] {
    testimonials.values().filter(
      func(t) { t.status == "approved" }
    ).toArray();
  };

  // Upi payment functions
  public query ({ caller }) func getUpiSettings() : async UpiSettings {
    upiSettings;
  };

  public shared ({ caller }) func submitPaymentOrder(
    clientName : Text,
    clientPhone : Text,
    planName : Text,
    amount : Nat,
    utrNumber : Text,
  ) : async Text {
    if (not upiSettings.paymentsEnabled) {
      Runtime.trap("UPI payments are currently disabled");
    };

    if (utrNumber.size() != 12) {
      Runtime.trap("Invalid UTR number: must be exactly 12 characters");
    };

    let id = generateId();
    let paymentOrder : PaymentOrder = {
      id;
      clientName;
      clientPhone;
      planName;
      amount;
      utrNumber;
      status = "pending";
      appLink = "";
      createdAt = Time.now();
    };

    paymentOrders.add(id, paymentOrder);
    id;
  };

  // GET PAYMENT FUNCTION FOR CLIENTS
  public query ({ caller }) func getPaymentOrderStatus(orderId : Text) : async ?PaymentOrderStatus {
    let paymentOrder = paymentOrders.get(orderId);
    paymentOrder.map(
      func(po) {
        {
          id = po.id;
          planName = po.planName;
          amount = po.amount;
          status = po.status;
          appLink = po.appLink;
          createdAt = po.createdAt;
        };
      }
    );
  };

  // Admin-only functions
  public query ({ caller }) func getAllDemoRequests() : async [DemoRequest] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    demoRequests.values().toArray();
  };

  public query ({ caller }) func getAllAuditRequests() : async [AuditRequest] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    auditRequests.values().toArray();
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    contactMessages.values().toArray();
  };

  public shared ({ caller }) func updateDemoRequestStatus(id : Text, status : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
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
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    siteSettings;
  };

  public shared ({ caller }) func updateSiteSettings(newSettings : SiteSettings) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    siteSettings := newSettings;
  };

  public shared ({ caller }) func extendPreviewExpiry(id : Text, days : Nat) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
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

  // Admin-only testimonial functions
  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    testimonials.values().toArray();
  };

  public shared ({ caller }) func updateTestimonialStatus(id : Text, status : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    switch (testimonials.get(id)) {
      case (null) { Runtime.trap("Testimonial not found") };
      case (?testimonial) {
        let updatedTestimonial = { testimonial with status };
        testimonials.add(id, updatedTestimonial);
      };
    };
  };

  // Admin-only payment functions
  public query ({ caller }) func getAllPaymentOrders() : async [PaymentOrder] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    paymentOrders.values().toArray();
  };

  public shared ({ caller }) func updatePaymentOrderStatus(id : Text, status : Text, appLink : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    switch (paymentOrders.get(id)) {
      case (null) { Runtime.trap("Payment order not found") };
      case (?paymentOrder) {
        let updatedPaymentOrder = { paymentOrder with status; appLink };
        paymentOrders.add(id, updatedPaymentOrder);
      };
    };
  };

  public shared ({ caller }) func updateUpiSettings(newSettings : UpiSettings) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    upiSettings := newSettings;
  };

  // Portfolio Management Functions
  public shared ({ caller }) func addPortfolioItem(
    title : Text,
    businessType : Text,
    description : Text,
    liveUrl : Text,
    thumbnailUrl : Text,
    pages : [Text],
    status : Text,
  ) : async Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };

    let id = generateId();
    let portfolioItem : PortfolioItem = {
      id;
      title;
      businessType;
      description;
      liveUrl;
      thumbnailUrl;
      pages;
      status;
      createdAt = Time.now();
    };

    portfolioItems.add(id, portfolioItem);
    id;
  };

  public shared ({ caller }) func updatePortfolioItem(
    id : Text,
    title : Text,
    businessType : Text,
    description : Text,
    liveUrl : Text,
    thumbnailUrl : Text,
    pages : [Text],
    status : Text,
  ) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };

    switch (portfolioItems.get(id)) {
      case (null) { Runtime.trap("Portfolio item not found") };
      case (?existingItem) {
        let updatedItem = {
          existingItem with
          title;
          businessType;
          description;
          liveUrl;
          thumbnailUrl;
          pages;
          status;
        };
        portfolioItems.add(id, updatedItem);
      };
    };
  };

  public shared ({ caller }) func deletePortfolioItem(id : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };

    switch (portfolioItems.get(id)) {
      case (null) { Runtime.trap("Portfolio item not found") };
      case (?_item) {
        portfolioItems.remove(id);
      };
    };
  };

  public query ({ caller }) func getAllPortfolioItems() : async [PortfolioItem] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    portfolioItems.values().toArray();
  };

  public query ({ caller }) func getPublicPortfolioItems() : async [PortfolioItem] {
    portfolioItems.values().filter(
      func(item) { item.status != "hidden" }
    ).toArray().sort(
      func(a, b) {
        Int.compare(
          b.createdAt,
          a.createdAt,
        );
      }
    );
  };
};
