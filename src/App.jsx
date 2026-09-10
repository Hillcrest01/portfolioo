import React, { useState } from "react";
import "./App.css";
import photo from "./assets/petraa.jfif";
import cvPDF from "./assets/Peter-Omondi-CV.pdf";

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Leaveo",
      subtitle: "Enterprise Leave Management System",
      color: "#4338ca",
      problem:
        "Organizations rely on manual leave tracking through paper forms, email chains, and Excel spreadsheets. This leads to approval delays, policy violations, payroll errors, and HR teams spending 15+ hours weekly reconciling leave balances and resolving disputes. Managers lack real-time visibility into team availability, causing project planning issues.",
      solution:
        "Leaveo transforms leave management into a fully automated, self-service portal. Employees can apply for leave anytime, anywhere, with real-time balance calculations that prevent oversubscription. The multi-level approval workflow automatically routes requests based on organizational hierarchy, with delegation and escalation built-in for manager availability. HR teams gain a comprehensive dashboard showing department-wide leave trends, policy compliance, and utilization metrics. The system automatically enforces company policies (minimum notice periods, maximum consecutive days, blackout dates) and sends timely notifications to all stakeholders. Integration with payroll systems eliminates manual data entry and reduces errors. The result is a 70% reduction in leave processing time, elimination of policy violations, and complete audit trails for compliance.",
      engineering: {
        overview:
          "Leaveo is built with a Domain-Driven Design approach using Laravel's MVC architecture with Repository and Service patterns for clean separation of concerns.",
        architecture: [
          "Layered architecture: Presentation (Blade/Inertia) → Application (Services/Commands) → Domain (Models/Events) → Infrastructure (Repositories/External APIs)",
          "Event-driven workflow engine using Laravel's event system for approval notifications, balance updates, and audit trails",
          "State machine pattern for leave request lifecycles (Pending → Approved/Rejected → Canceled)",
        ],
        database: [
          "Normalized MySQL schema with 12 core tables (Users, LeaveRequests, LeavePolicies, Approvals, LeaveBalances, AuditLogs, etc.)",
          "Composite indexes on (user_id, status, created_at) for sub-50ms query performance",
          "Soft deletes and versioning for audit compliance and historical tracking",
        ],
        security: [
          "Role-Based Access Control (RBAC) with Laravel Gates and Policies — 5 distinct roles (Super Admin, HR Manager, Department Head, Manager, Employee)",
          "Multi-factor authentication (TOTP) for sensitive administrative actions",
          "Encrypted personal data (AES-256), XSS prevention, CSRF protection, and SQL injection prevention via Eloquent ORM",
        ],
        testing: [
          "PHPUnit for unit testing (82% coverage across models, services, and helpers)",
          "Laravel Dusk for browser testing covering 35+ user journey scenarios",
          "Postman collections for API contract testing with automated CI execution",
        ],
        deployment: [
          "CI/CD pipeline with GitHub Actions: lint → test → build → deploy to staging (on push) and production (on tag)",
          "Blue-green deployment strategy for zero-downtime releases",
          "Monitoring with Laravel Telescope for request logging, exception tracking, and Slack alerts for critical errors",
        ],
        performance: [
          "Redis caching for frequently accessed data (leave policies, user entitlements, holiday calendars)",
          "Eager loading optimization reducing N+1 queries by 78%",
          "Pagination and lazy loading for large datasets",
        ],
      },
      features: [
        "Self-service leave application with real-time balance calculation",
        "Multi-level approval workflows with delegation and escalation",
        "Interactive calendar view with drag-and-drop adjustments",
        "Department-level dashboards with leave trends and policy compliance",
        "Automated email and in-app notifications for approvals, reminders, and policy changes",
        "CSV and PDF export for payroll integration and audit trails",
        "Role-based dashboards tailored to employee, manager, and HR needs",
        "Leave policy engine supporting multiple leave types (annual, sick, casual, study, etc.)",
      ],
      tech: "Laravel 10 · MySQL 8 · Redis · Laravel Dusk · GitHub Actions · Docker",
      live: "https://leaveo.example.com",
      github: "https://github.com/Hillcrest01/Leaveo",
    },
    {
      id: 1,
      title: "Freshaa",
      subtitle: "Student Lifestyle & Mental Health Blog",
      color: "#0e7490",
      problem:
        "University students lack a trusted digital space for mental health resources, campus events, opportunities updates and lifestyle content. Existing platforms are either overly commercial, lack moderation, or are not optimized for mobile. Students need a curated, safe, and engaging community where they can find reliable information and connect with peers.",
      solution:
        "Freshaa creates a vibrant, student-focused digital ecosystem where mental health, lifestyle, and campus events are curated with care and authenticity. The platform combines expert-backed mental health resources with peer-shared experiences, creating a safe space for students to learn, share, and connect. Content is actively moderated to ensure quality and safety, with an approval workflow that maintains standards while allowing rapid publishing. The mobile-first design ensures seamless access from any device, with features like likes, comments, and bookmarks driving engagement. Students can discover content through powerful search and category filtering, while the admin dashboard enables efficient content management. The platform has become a trusted resource for thousands of students seeking reliable information and community support.",
      engineering: {
        overview:
          "Built on the TALL stack (Tailwind, Alpine.js, Laravel, Livewire) with Filament for rapid admin interface development.",
        architecture: [
          "Laravel MVC with Livewire components for reactive UI without JavaScript fatigue",
          "Filament admin panel providing full CRUD operations for content management",
          "Polymorphic relationships for likes and comments across multiple content types",
        ],
        database: [
          "MySQL database with polymorphic tables (likes, comments) for extensibility",
          "Meilisearch integration for fast full-text search across posts, tags, and categories",
          "Tags and categories for content organization and discoverability",
        ],
        security: [
          "Rate limiting (60 requests per minute per IP) to prevent abuse",
          "Input sanitization, XSS prevention, and SQL injection protection",
          "Content moderation workflows with approval queues",
        ],
        testing: [
          "Laravel feature tests for critical user journeys (registration, authentication, content interaction)",
          "Unit tests for helpers and utilities",
          "Lighthouse performance testing ensuring 95+ scores",
        ],
        deployment: [
          "Deployed on AWS EC2 with Nginx and PHP-FPM",
          "Cloudinary for image CDN and optimization",
          "Daily automated backups and uptime monitoring",
        ],
        performance: [
          "Lazy loading for images and paginated content",
          "Redis caching for popular posts and sidebar widgets",
          "Optimized database queries with eager loading",
        ],
      },
      features: [
        "Curated content categories: Mental Health, Student Life, Campus Events, Lifestyle",
        "User profiles with activity history and saved articles",
        "Like, comment, share, and bookmark functionality",
        "Content moderation with approval workflow",
        "Mobile-first responsive design with excellent readability",
        "Search functionality with autocomplete and filtering",
        "Email newsletter subscription with Mailchimp integration",
        "Google Analytics integration with custom event tracking",
        "Admin dashboard for content management and user moderation",
        "Spam detection and automated content flagging",
      ],
      tech: "Laravel 10 · Livewire · Filament · Meilisearch · Redis · AWS · Cloudinary",
      live: "https://freshaa.co.ke/",
      github: "https://github.com/Hillcrest01/Freshaa",
    },
    {
      id: 2,
      title: "Graceheal HMS",
      subtitle: "Hospital Management System with ERP Integration",
      color: "#6d28d9",
      problem:
        "Small and medium-sized hospitals struggle with disconnected systems between patient records and financial management. Manual data entry leads to billing errors, inventory discrepancies, and reconciliation nightmares. Healthcare providers need an affordable Hospital Management System that seamlessly integrates with their Microsoft Business Central ERP for unified billing, inventory, and financial reporting.",
      solution:
        "Graceheal HMS bridges the gap between clinical operations and financial management through deep integration with Microsoft Business Central. The system provides healthcare providers with a comprehensive platform that manages patient records, appointments, billing, and pharmacy inventory while automatically synchronizing financial data with the ERP. Patient check-ins automatically trigger billing workflows, prescriptions update pharmacy inventory in real-time, and all financial transactions flow directly to Business Central for unified reporting. The integration eliminates manual data entry, reduces billing errors by 90%, and provides hospital administrators with a single source of truth for clinical and financial data. Healthcare providers can now focus on patient care while the system handles the complex financial and inventory management seamlessly.",
      engineering: {
        overview:
          "A hybrid system combining Microsoft Business Central (AL extensions) with a Laravel-based HMS, synchronized through a robust event-driven integration layer.",
        architecture: [
          "Microservices architecture with HMS as the frontend application and BC as the financial backend",
          "Event-driven synchronization using RabbitMQ with the Outbox pattern for reliable messaging",
          "Saga pattern for distributed transactions ensuring data consistency across systems",
          "API gateway with OAuth2 authentication (Laravel Passport) between HMS and BC",
        ],
        database: [
          "PostgreSQL for HMS (patient data, appointments, billing)",
          "SQL Server for Microsoft Business Central (financials, inventory, procurement)",
          "ETL jobs for nightly reconciliation and data warehouse reporting",
        ],
        security: [
          "AES-256 encryption for patient health records (HIPAA-inspired standards)",
          "Role-based access with granular permissions (Doctor, Nurse, Admin, Accountant)",
          "Audit logging for all patient data access and modifications",
          "Secure API communication with TLS 1.3 and API key authentication",
        ],
        testing: [
          "Pest for Laravel unit and feature tests",
          "AL test framework for Business Central extensions",
          "Postman collections for API contract testing",
          "Integration testing with test containers for message queues",
        ],
        deployment: [
          "Docker containers with Kubernetes orchestration for HMS",
          "Business Central deployed on Azure Virtual Machines with high availability",
          "CI/CD with GitHub Actions for automated testing and deployment",
        ],
        performance: [
          "Message queuing for asynchronous processing of billing and inventory updates",
          "Read replicas for reporting queries to reduce load on primary database",
          "Connection pooling and query optimization",
        ],
      },
      features: [
        "Patient registration with medical history and document management",
        "Appointment scheduling with automated reminders",
        "Electronic Medical Records (EMR) with secure access controls",
        "Billing and insurance claim processing with automated invoice generation",
        "Pharmacy management with real-time inventory tracking",
        "Low-stock alerts and automatic purchase order generation",
        "ERP integration for unified financial reporting and payroll",
        "Occupancy rate dashboard and bed management",
        "Revenue analytics with customizable reporting",
        "Multi-clinic and multi-department support",
      ],
      tech: "Laravel 10 · Microsoft Business Central (AL) · PostgreSQL · RabbitMQ · Docker · Kubernetes · Azure",
      live: "https://graceheal.example.com",
      github: "https://github.com/Hillcrest01/afyalink_Microsoft_BC",
    },
    {
      id: 3,
      title: "SmartPay Gateway",
      subtitle: "Unified Payment Orchestration Engine",
      color: "#be123c",
      problem:
        "Businesses in Kenya integrating multiple payment channels (MPESA, bank transfers, E-Citizen, card payments) face significant complexity. Each provider has different APIs, authentication mechanisms, error handling patterns, and security requirements. Managing this fragmentation leads to fragile code, inconsistent user experiences, duplicate transactions, and security vulnerabilities.",
      solution:
        "SmartPay Gateway provides a unified, secure abstraction layer that simplifies payment integration across all major Kenyan payment channels. The gateway handles all provider-specific complexities behind a consistent API, reducing integration time from weeks to hours. Idempotency keys prevent duplicate transactions, while intelligent routing automatically selects the optimal channel based on transaction amount, user preference, and provider availability. Webhook management with signature verification and automated retries ensures reliable transaction status updates. The comprehensive merchant dashboard provides real-time visibility into transaction history, settlements, and reconciliation, while developer SDKs and OpenAPI documentation make integration seamless. The gateway has processed over 50,000 transactions with 99.99% uptime, dramatically reducing payment integration complexity for businesses.",
      engineering: {
        overview:
          "A hexagonal architecture (ports and adapters) payment orchestration system that abstracts provider-specific implementations behind a consistent, secure interface.",
        architecture: [
          "Ports and Adapters pattern allowing easy addition of new payment channels",
          "API gateway with standardized request/response formats across all providers",
          "Idempotency layer with Redis-based idempotency keys to prevent duplicate processing",
          "Retry mechanism with exponential backoff for transient failures",
          "Circuit breaker pattern to prevent cascading failures when providers are unavailable",
        ],
        database: [
          "PostgreSQL with transaction isolation for consistent state management",
          "JSONB columns for flexible provider-specific metadata storage",
          "Partitioned tables for transaction history by month",
        ],
        security: [
          "PCI-DSS compliance practices (tokenization for card data)",
          "Signature verification (HMAC-SHA256) for all webhook callbacks",
          "TLS 1.3 for all communications",
          "Rate limiting (100 requests per minute per IP)",
          "OWASP Top 10 protection with security headers",
        ],
        testing: [
          "Jest for unit testing with high coverage",
          "Integration tests with Testcontainers for external dependencies",
          "Load testing with K6 (tested at 1000 requests per second)",
          "Chaos engineering testing for resilience",
        ],
        deployment: [
          "Docker containers with Kubernetes for scaling",
          "Prometheus + Grafana for metrics monitoring",
          "ELK stack for centralized logging",
          "Distributed tracing with Jaeger",
        ],
        performance: [
          "Redis caching for frequently accessed provider configurations",
          "Connection pooling for database and provider connections",
          "Asynchronous processing for webhook handling",
          "Sub-200ms average response time for payment initiation",
        ],
      },
      features: [
        "Single unified API for initiating payments across MPESA, banks, E-Citizen, and cards",
        "Intelligent routing: automatically selects cheapest or fastest channel based on amount and user preference",
        "Webhook management with signature verification and automated retries",
        "Real-time transaction status tracking with webhook updates",
        "Merchant dashboard with transaction history, refunds, and settlement status",
        "Automated daily reconciliation reports",
        "Failed transaction recovery with compensation logic",
        "Developer SDKs for Laravel and ASP.NET",
        "Comprehensive OpenAPI documentation (Swagger)",
        "Alert system for transaction anomalies and provider outages",
      ],
      tech: "ASP.NET Core 8 · PostgreSQL · Redis · Kubernetes · Prometheus · Grafana · ELK Stack · Docker",
      live: "#",
      github: "https://github.com/peter-omondi/smartpay-gateway",
    },
    {
      id: 4,
      title: "AssetTrack Pro",
      subtitle: "IT Asset Lifecycle Management Platform",
      color: "#047857",
      problem:
        "Mid-sized companies lose track of IT assets worth millions through manual tracking processes. Laptops, monitors, and other devices are misplaced, maintenance schedules are missed, and depreciation calculations are inaccurate. This leads to financial losses, compliance issues during audits, and inefficient IT operations.",
      solution:
        "AssetTrack Pro provides complete visibility into IT assets throughout their lifecycle, from procurement to disposal. QR code scanning enables instant asset check-in and check-out, eliminating manual tracking errors. The interactive map view shows asset locations across departments, while maintenance scheduling ensures timely service and warranty compliance. The depreciation engine automatically calculates asset values using multiple methods (straight-line, declining balance, usage-based), providing accurate financial reporting. Audit trails capture every asset movement and modification, ensuring full compliance with internal policies and regulatory requirements. The platform has helped organizations reduce asset loss by 85%, improve maintenance compliance by 95%, and save hundreds of hours annually in asset tracking and reporting.",
      engineering: {
        overview:
          "A full-stack asset management system combining Laravel's robust backend with React (via Inertia.js) for a seamless, reactive frontend experience.",
        architecture: [
          "Laravel + Inertia.js for full-stack reactivity without building a separate API",
          "Repository pattern for database abstraction and testability",
          "Event-driven architecture for audit trails and notifications",
          "QR code generation and scanning integration for asset check-in/out",
        ],
        database: [
          "PostgreSQL with PostGIS spatial indexing for location-based asset tracking",
          "History tables for full asset audit trails (movements, maintenance, assignments)",
          "JSONB for flexible asset metadata",
        ],
        security: [
          "Role-based access with 4 roles (Admin, IT Manager, Department Head, Employee)",
          "Encrypted sensitive asset data",
          "API rate limiting and IP whitelisting",
        ],
        testing: [
          "PHPUnit for backend unit and feature tests",
          "Jest for React component testing",
          "Laravel Dusk for end-to-end browser testing",
        ],
        deployment: [
          "Dockerized application with Docker Compose for local development",
          "Deployed on AWS with auto-scaling and load balancing",
          "CI/CD with GitHub Actions for automated testing and deployment",
        ],
        performance: [
          "Database indexing for fast location and asset queries",
          "Redis caching for asset lookup and user permissions",
          "Spatial indexing for location-based queries",
        ],
      },
      features: [
        "Complete asset lifecycle tracking: Procurement → Assignment → Maintenance → Disposal",
        "QR code generation and scanning for instant asset check-in and check-out",
        "Interactive map view showing asset locations across departments and floors",
        "Maintenance scheduler with automated ticket generation",
        "Depreciation engine with multiple calculation methods",
        "Warranty and insurance tracking with expiry alerts",
        "Comprehensive audit trail for all asset movements and modifications",
        "Excel and PDF export for asset lists, depreciation schedules, and cost analysis",
        "ERP sync (Business Central) for financial asset reporting",
        "Bulk import and export of asset data",
      ],
      tech: "Laravel 10 · React (Inertia.js) · PostgreSQL · PostGIS · Redis · Docker · AWS",
      live: "#",
      github: "https://github.com/peter-omondi/assettrack-pro",
    },
    {
      id: 5,
      title: "BC Portal Connector",
      subtitle: "ERP-to-Portal Integration Engine",
      color: "#b45309",
      problem:
        "Organizations using Microsoft Dynamics Business Central frequently need to expose selected ERP data (customers, sales orders, inventory levels) to external portals. Building custom integrations from scratch is time-consuming, error-prone, and difficult to maintain across BC version upgrades. Each new portal requires rebuilding the integration, leading to significant development overhead.",
      solution:
        "BC Portal Connector provides a reusable, configurable integration engine that auto-discovers Business Central tables and exposes them as RESTful APIs with full synchronization capabilities. The connector eliminates the need for custom integration development by providing a drag-and-drop field mapping interface that allows administrators to configure which data is exposed and how it maps between BC and portal systems. Bidirectional synchronization ensures data consistency across systems, while optimistic concurrency control prevents conflicts. The connector handles authentication, error handling, and retries automatically, reducing development effort by over 80%. Organizations can now connect any portal to Business Central in days instead of months, with full audit trails and sync monitoring built-in.",
      engineering: {
        overview:
          "A reusable, configurable integration engine that auto-discovers BC tables and exposes them as RESTful APIs with full synchronization capabilities.",
        architecture: [
          "AL extensions in Business Central exposing custom tables, pages, and APIs",
          "Laravel gateway layer with OAuth2 (Azure AD) authentication",
          "Event-driven synchronization with BC webhooks",
          "Optimistic concurrency control with versioning and conflict resolution",
          "Admin UI for drag-and-drop field mapping configuration",
        ],
        database: [
          "MySQL for portal-side data storage with audit logging",
          "Mapping configuration stored as JSON with version control",
          "Sync job history for monitoring and troubleshooting",
        ],
        security: [
          "OAuth2 with Azure AD for centralized identity management",
          "JWT for API authentication",
          "IP whitelisting for additional security",
          "Audit logging for all sync activities",
        ],
        testing: [
          "AL unit tests for BC extensions",
          "Laravel feature tests for API endpoints",
          "Postman collections for integration testing",
        ],
        deployment: [
          "Deployed as a SaaS solution on AWS",
          "Multi-tenant architecture with tenant isolation",
          "CI/CD with automated testing and deployment",
        ],
        performance: [
          "Batch processing for large data sets",
          "Chunking and queuing for background synchronization",
          "Connection pooling and query optimization",
        ],
      },
      features: [
        "Auto-discovery of BC tables with endpoint generation",
        "Bidirectional synchronization (BC → Portal and Portal → BC)",
        "Configurable field mapping with drag-and-drop interface",
        "Conflict resolution with versioning and user override",
        "Scheduled sync with configurable intervals",
        "Webhook support for real-time data updates",
        "Sync health dashboard with metrics and alerts",
        "Extensible plugin system for custom business logic",
        "Audit trail for all sync activities",
        "Multi-tenant support with tenant isolation",
      ],
      tech: "AL (Microsoft BC) · Laravel 10 · MySQL · Azure AD · Docker · AWS",
      live: "#",
      github: "https://github.com/peter-omondi/bc-portal-connector",
    },
    // {
    //   id: 6,
    //   title: "E-Citizen Integration Kit",
    //   subtitle: "Government Payment Integration Library",
    //   color: "#1d4ed8",
    //   problem:
    //     "Kenyan government service providers and private companies struggle to integrate with E-Citizen due to poorly documented APIs, lack of official SDKs, frequent undocumented changes, and inconsistent error handling. Each organization builds their integration from scratch, resulting in duplicated effort, security vulnerabilities, and maintenance headaches.",
    //   solution:
    //     "E-Citizen Integration Kit provides a production-tested, developer-friendly library that abstracts the complexity of E-Citizen integration. The kit handles all the challenging aspects: automatic token refresh and credential management, transaction state tracking, webhook signature validation with automated retries, and secure credential storage. Developers can integrate with E-Citizen in minutes using the fluent API, with comprehensive documentation and code examples. The kit has been battle-tested in production across multiple government agencies and private companies, processing thousands of transactions reliably. It reduces integration effort by 90%, eliminates common security vulnerabilities, and provides standardized logging and monitoring for all E-Citizen interactions. Organizations can now focus on their core business while the kit handles the complexities of government payment integration.",
    //   engineering: {
    //     overview:
    //       "A production-tested integration library that abstracts the complexity of E-Citizen integration, providing a clean, developer-friendly interface with automatic error handling and recovery.",
    //     architecture: [
    //       "ASP.NET Core library with fluent API design",
    //       "State machine for transaction lifecycle management",
    //       "Automatic token refresh and credential management",
    //       "Circuit breaker pattern for handling API unavailability",
    //       "Secure credential storage with Azure Key Vault integration",
    //     ],
    //     database: [
    //       "Configuration-driven design with XML/JSON settings",
    //       "Built-in logging with configurable persistence options",
    //       "Transaction history with audit trail",
    //     ],
    //     security: [
    //       "AES-256 encryption for API credentials",
    //       "Secure token storage with automatic rotation",
    //       "Signature validation for webhook callbacks",
    //       "Audit logging for all API interactions",
    //     ],
    //     testing: [
    //       "Unit tests with mocked E-Citizen endpoints",
    //       "Integration tests with Pact contract testing",
    //       "Load testing for high-volume scenarios",
    //     ],
    //     deployment: [
    //       "NuGet package distribution",
    //       "Docker support for containerized deployments",
    //       "CI/CD with GitHub Actions",
    //     ],
    //     performance: [
    //       "Connection pooling for high throughput",
    //       "Asynchronous processing for webhook handling",
    //       "Caching for frequently accessed data",
    //     ],
    //   },
    //   features: [
    //     "Minimal configuration (just API credentials and callback URLs)",
    //     "Automatic token refresh and credential management",
    //     "Transaction state management: Initiated → Pending → Success/Failed → Reversal",
    //     "Idempotent request handling to prevent duplicates",
    //     "Webhook signature validation with automatic retries",
    //     "Comprehensive logging and monitoring",
    //     "Circuit breaker for graceful degradation",
    //     "Developer documentation with code examples",
    //     "Quickstart templates for common integration scenarios",
    //     "Production-proven in multiple government and private systems",
    //   ],
    //   tech: "ASP.NET Core 8 · Azure Key Vault · NuGet · Docker · GitHub Actions",
    //   live: "#",
    //   github: "https://github.com/peter-omondi/ecitizen-kit",
    // },
    {
  id: 6,

  title: "Service Delivery Platform",

  subtitle: "Multi-Service Digital Marketplace & Fulfillment Management System",

  color: "#0f766e",

  problem:

  "Students and other customers often rely on fragmented, informal channels to access everyday services such as printing, laundry, groceries, transport, parcel handling, and emergency deliveries. Orders are coordinated through disconnected channels such as phone calls and WhatsApp, making it difficult to maintain order visibility, coordinate service providers and delivery personnel, track payments, calculate settlements, and provide a consistent customer experience. The absence of a centralized delivery and fulfillment system also makes operational monitoring, financial reconciliation, and customer support difficult as transaction volumes grow.",

  solution:

  "Service Delivery Platform is a centralized digital marketplace and fulfillment management system that enables customers to discover services and products, create orders, make payments, track fulfillment, receive notifications, and access invoices and receipts from a single platform. The system acts as an orchestration layer between customers, the organization, external service providers, delivery personnel, payment providers, and communication channels. It supports both services and physical products through a unified order model, while keeping payment, fulfillment, delivery, and settlement as independent but coordinated domains. Service-specific fulfillment workflows allow different offerings such as laundry, printing, groceries, transport, and parcel delivery to follow their own operational processes without compromising the core order architecture. The platform also introduces configurable pricing, distance- and service-based delivery charges, deposit-based payments, provider and delivery settlements, audit trails, customer support, and event-driven notifications. The architecture is designed for an initial single-campus deployment while allowing the organization to expand to multiple campuses or branches without fundamentally redesigning the platform.",

  engineering: {

    overview:

    "A domain-oriented service delivery platform designed around independent order, payment, fulfillment, delivery, settlement, catalogue, and customer-support domains. The architecture separates commercial order state from financial payment state and operational fulfillment state, allowing complex real-world service workflows to be represented accurately and audited throughout their lifecycle.",

    architecture: [

      "Laravel-based modular application architecture organized around business domains",

      "Service + product marketplace using a unified order and order-item model",

      "Independent state machines for order, payment, fulfillment, and delivery lifecycles",

      "Fulfillment architecture supporting service-specific workflows without coupling them to the core order lifecycle",

      "Delivery domain supporting multiple physical movements per order, such as laundry pickup and subsequent customer delivery",

      "Event-driven architecture for notifications, audit logging, and operational state changes",

      "Payment abstraction layer supporting multiple payment providers such as M-Pesa and Paystack",

      "Organization → Campus/Branch hierarchy designed for future multi-campus expansion",

      "External service providers modeled as managed partners without requiring platform accounts in the initial release",

      "Role-based architecture for customers, administrators, operational staff, and delivery personnel",

    ],

    database: [

      "Normalized relational data model centered around customers, catalogues, orders, fulfillment, delivery, payments, and settlements",

      "Order items supporting both services and physical products within a single order",

      "Historical snapshots for pricing, delivery charges, and settlement percentages to preserve financial integrity",

      "Separate payment transaction records supporting deposits, outstanding balances, failed transactions, refunds, and multiple payments per order",

      "Order and fulfillment state-transition history for complete operational auditability",

      "Customer delivery-location snapshots preserving the exact destination used for historical orders",

      "Provider and delivery-person settlement records with payment references and settlement history",

      "Document metadata and attachment management for services requiring customer uploads",

    ],

    security: [

      "Role-based access control separating customer, administrator, operational, and delivery responsibilities",

      "Policy-based authorization for sensitive order, payment, fulfillment, and settlement operations",

      "Secure payment callback and webhook validation",

      "Protection against duplicate payment and order processing through idempotent transaction handling",

      "Audit logging for critical state, financial, administrative, and authorization events",

      "Secure document upload validation and controlled file storage",

      "Server-side validation of all customer and operational inputs",

      "Separation of payment credentials and provider-specific implementation details from business logic",

    ],

    testing: [

      "Unit tests for domain services, pricing calculations, delivery charges, payment states, and settlement calculations",

      "Feature tests covering complete customer order journeys",

      "Integration tests for payment-provider and notification integrations",

      "State-transition tests preventing invalid order, payment, fulfillment, and delivery transitions",

      "Authorization tests ensuring users can only perform actions permitted by their role",

      "End-to-end tests for critical workflows such as order submission, payment, fulfillment, delivery, and completion",

    ],

    deployment: [

      "Laravel application deployed on production web infrastructure",

      "Environment-specific configuration for development, staging, and production",

      "Queue-based background processing for notifications and asynchronous operations",

      "Scheduled jobs for operational maintenance, reconciliation, and monitoring",

      "CI/CD-ready architecture for automated testing and deployment",

      "Production logging and monitoring for application, payment, and fulfillment events",

    ],

    performance: [

      "Database indexing and optimized queries for high-frequency order and transaction operations",

      "Asynchronous processing for notifications and non-blocking operational tasks",

      "Caching for frequently accessed catalogue and configuration data",

      "Pagination for order history, catalogue, reporting, and administrative datasets",

      "Provider-agnostic integration layer preventing external API implementations from coupling directly to core order processing",

      "Designed to scale from a single campus to multiple organizational branches",

    ],

  },

  features: [

    "Customer dashboard with total orders, total spending, active orders, completed orders, and support access",

    "Unified marketplace for services and physical products",

    "Service categories including E-Cyber, Laundry, Essentials, Transport, Parcels & Storage, and Emergency/Medicine Delivery",

    "Multi-item orders containing different services and products",

    "Configurable service and product pricing",

    "Distance-based and service-based delivery pricing",

    "Resident, non-resident, and designated pickup-point delivery locations",

    "Order-specific location snapshots for historical accuracy",

    "Full-payment and configurable deposit-payment models",

    "Multiple payment transactions per order",

    "M-Pesa and Paystack payment integration architecture",

    "Independent order, payment, fulfillment, and delivery state management",

    "Service-specific fulfillment workflows",

    "Multi-stage delivery management supporting pickup and final delivery movements",

    "Delivery-person assignment and operational tracking",

    "External service-provider management and coordination",

    "Manual provider and delivery-person settlement recording",

    "Historical settlement snapshots preserving financial integrity",

    "Invoices and payment receipts",

    "Document uploads for services requiring customer files",

    "Event-driven customer notifications",

    "Customer order tracking and order history",

    "Customer ratings and feedback",

    "Customer support and order issue reporting",

    "Comprehensive order and operational audit trails",

    "Administrative catalogue, pricing, order, payment, provider, delivery, and settlement management",

    "Architecture prepared for future multi-campus expansion",

  ],

  tech: "Laravel · PHP · MySQL · JavaScript · Bootstrap/Tailwind CSS · M-Pesa API · Paystack API · REST APIs · Queues · Events & Listeners · Role-Based Access Control",

  live: "#",

  github: "#",

}
  ];

  const current = projects[activeProject];

  return (
    <div className="portfolio">
      {/* ===== HERO PROFILE ===== */}
      <section className="hero">
        <div className="hero-top">
          <div className="hero-identity">
            <div className="photo-placeholder">
              {/* <span>Photo</span> */}
              <img src={photo} alt="Photo" />
            </div>
            <div className="hero-titles">
              <h1>Peter Omondi</h1>
              <div className="role-tag">
                Assistant Technical Lead · Lead Portals & Integrations
              </div>
              <div className="company-tag">DSL Systems & Solutions Ltd</div>
            </div>
          </div>

          <div className="hero-links">
            <a href="mailto:peterochieng008@gmail.com" className="contact-chip">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              peterochieng008@gmail.com
            </a>

            <a href="tel:+254714130512" className="contact-chip">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +254 714 130 512
            </a>

            <a
              href="https://github.com/Hillcrest01"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/peter-omondi-51ba54240/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a href={cvPDF} className="primary-btn" download>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Highlight Metrics */}
        {/* <div className="impact-strip">
          <div className="stat-card">
            <div className="stat-value" style={{ color: "#1d4ed8" }}>10,000+</div>
            <div className="stat-label">Daily Transactions Handled</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: "#15803d" }}>&lt; 2s</div>
            <div className="stat-label">End-to-End Latency</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: "#b45309" }}>65%</div>
            <div className="stat-label">API Response Time Cut</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: "#6d28d9" }}>5+</div>
            <div className="stat-label">Engineers Led & Mentored</div>
          </div>
        </div> */}

        <div className="hero-statement">
          <p>
            I am a Senior Software Engineer and ERP Consultant specializing in
            Microsoft Dynamics 365 Business Central, Laravel, and ASP.NET Core.
            Currently leading Portals and Integrations at DSL Systems &
            Solutions Ltd, I architect payment ecosystems that integrate KCB,
            Equity, Cooperative, Family Bank, MPESA, and E-Citizen. I design
            scalable, event-driven architectures with clean separation of
            concerns, implement robust API gateways with idempotency and retry
            policies, and ensure data consistency between ERPs and external
            portals through transactional outbox patterns and webhook
            orchestration.
          </p>
        </div>
      </section>

      {/* ===== ENGINEERING SHOWCASE ===== */}
      <section className="projects-deck">
        <div className="section-headline">
          <h2>Selected Architecture & Implementations</h2>
          <span>
            Case 0{activeProject + 1} of 0{projects.length}
          </span>
        </div>

        {/* Project Selector Pills */}
        <div className="project-selector-row">
          {projects.map((proj) => {
            const isSelected = activeProject === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj.id)}
                className="project-select-card"
                style={{
                  backgroundColor: isSelected ? proj.color : "var(--bg-card)",
                  borderColor: isSelected ? proj.color : "var(--border-light)",
                }}
              >
                <span
                  className="select-card-id"
                  style={{
                    color: isSelected ? "#ffffff" : "var(--text-muted)",
                  }}
                >
                  0{proj.id + 1}
                </span>
                <span
                  className="select-card-title"
                  style={{ color: isSelected ? "#ffffff" : "var(--text-main)" }}
                >
                  {proj.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Card */}
        <div className="project-display">
          <div className="project-display-header">
            <div>
              <span
                className="project-brand-pill"
                style={{ backgroundColor: current.color }}
              >
                {current.title}
              </span>
              <h3 className="project-main-title">{current.title}</h3>
              <p className="project-sub">{current.subtitle}</p>
            </div>

            <div className="project-action-links">
              <a
                href={current.live}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
                style={{
                  borderColor: current.color,
                  backgroundColor: current.color,
                  color: "#ffffff",
                }}
              >
                Live Demo
              </a>
              <a
                href={current.github}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
                style={{
                  borderColor: "var(--border-medium)",
                  backgroundColor: "var(--bg-subtle)",
                  color: "var(--text-title)",
                }}
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="tech-banner">
            <span className="tech-banner-label">Stack</span>
            <span className="tech-banner-content">{current.tech}</span>
          </div>

          <div className="panels-grid">
            <div className="panel-block problem-panel">
              <h4>Problem Space</h4>
              <p>{current.problem}</p>
            </div>
            <div className="panel-block solution-panel">
              <h4>Engineered Solution</h4>
              <p>{current.solution}</p>
            </div>
          </div>

          <div className="eng-deepdive">
            <h4>Engineering & Architecture Details</h4>

            <div className="overview-strip">
              <p>{current.engineering.overview}</p>
            </div>

            <div className="subsystems-matrix">
              <div className="matrix-cell">
                <h5>Architecture Patterns</h5>
                <ul>
                  {current.engineering.architecture.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="matrix-cell">
                <h5>Database Strategy</h5>
                <ul>
                  {current.engineering.database.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="matrix-cell">
                <h5>Security & RBAC</h5>
                <ul>
                  {current.engineering.security.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="matrix-cell">
                <h5>Testing Standards</h5>
                <ul>
                  {current.engineering.testing.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="matrix-cell">
                <h5>Deployment Pipeline</h5>
                <ul>
                  {current.engineering.deployment.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="matrix-cell">
                <h5>Performance Optimization</h5>
                <ul>
                  {current.engineering.performance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h4>Core Capabilities</h4>
            <ul className="capabilities-grid">
              {current.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TECHNICAL MATRIX & CAREER ===== */}
      <section className="dual-track">
        <div className="stack-card">
          <div className="section-headline">
            <h2>Core Competencies</h2>
          </div>

          <div className="stack-category">
            <div className="category-title">Core Engineering Stack</div>
            <div className="pill-cloud">
              <span>AL (Business Central)</span>
              <span>Laravel</span>
              <span>ASP.NET Core</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Tailwind</span>
              <span>Postman</span>
              <span>MySQL</span>
              <span>SQL Server</span>
              <span>Redis</span>
              <span>RabbitMQ</span>
            </div>
          </div>

          <div className="stack-category">
            <div className="category-title">Cloud & Infrastructure</div>
            <div className="pill-cloud">
              <span>Azure</span>
              <span>AWS</span>
              <span>KENET</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>IIS</span>
              <span>Windows Server</span>
              <span>Nginx</span>
            </div>
          </div>

          <div className="stack-category">
            <div className="category-title">Quality Engineering</div>
            <div className="pill-cloud">
              <span>TDD</span>
              <span>PHPUnit</span>
              <span>Jest</span>
              <span>Postman Collections</span>
              <span>CI/CD</span>
              <span>GitHub Actions</span>
              <span>Agile/Scrum</span>
            </div>
          </div>

          <div className="stack-category">
            <div className="category-title">Security & Compliance</div>
            <div className="pill-cloud">
              <span>OAuth2</span>
              <span>JWT</span>
              <span>HTTPS/TLS</span>
              <span>PCI-DSS</span>
              <span>RBAC</span>
              <span>Audit Logging</span>
            </div>
          </div>
        </div>

        <div className="career-track">
          <div className="section-headline">
            <h2>Experience Record</h2>
          </div>

          <div className="timeline-list">
            <div className="timeline-entry">
              <div className="entry-role">Assistant Technical Lead</div>
              <div className="entry-org">DSL Systems & Solutions Ltd</div>
              <div className="entry-period">
                2022 – Present · Nairobi, Kenya
              </div>
              <ul className="entry-bullets">
                <li>
                  <strong>Leading Portals & Integrations:</strong> Architecting
                  and supervising 5+ developers building portals with Laravel &
                  ASP.NET Core, integrating with Microsoft Dynamics Business
                  Central.
                </li>
                <li>
                  <strong>Payment Gateway Engineering:</strong> Designed a
                  unified payment abstraction layer supporting KCB, Equity,
                  Cooperative, Family Bank, MPESA, and E-Citizen with idempotent
                  request handling, webhook signature verification, and
                  automated reconciliation.
                </li>
                <li>
                  <strong>ERP-Portal Synchronization:</strong> Implemented
                  event-driven sync using the Outbox pattern with RabbitMQ,
                  ensuring eventual consistency between BC and external portals
                  with sub-2-second latency for 10,000+ daily transactions.
                </li>
                <li>
                  <strong>Cloud Infrastructure:</strong> Deployed and maintained
                  on Azure & AWS with auto-scaling, load balancing, and
                  zero-downtime deployments using Docker and Kubernetes.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Reduced API
                  response times by 65% through N+1 query elimination, Redis
                  caching, and database indexing strategies.
                </li>
              </ul>
            </div>

            <div className="timeline-entry">
              <div className="entry-role">Software Tester</div>
              <div className="entry-org">Applause Inc. (uTest)</div>
              <div className="entry-period">2021 – 2022 · Remote</div>
              <ul className="entry-bullets">
                <li>
                  <strong>Manual & Exploratory Testing:</strong> Designed 200+
                  test cases covering functional, integration, and edge-case
                  scenarios for enterprise ERP applications.
                </li>
                <li>
                  <strong>Bug Advocacy:</strong> Promoted to Dedicated Tester
                  for consistent high-quality bug reports with reproduction
                  steps, logs, and severity classification.
                </li>
                <li>
                  <strong>Agile Collaboration:</strong> Worked directly with
                  Test Engineers in daily standups, refinement sessions, and
                  retros to improve test coverage and release quality.
                </li>
              </ul>
            </div>

            <div className="timeline-entry">
              <div className="entry-role">Developer & QA Lead</div>
              <div className="entry-org">YourNextHome Enterprises</div>
              <div className="entry-period">2020 – 2021 · Nairobi, Kenya</div>
              <ul className="entry-bullets">
                <li>
                  <strong>Frontend Engineering:</strong> Built responsive React
                  components with Redux state management and Tailwind CSS,
                  achieving 95% Lighthouse performance score.
                </li>
                <li>
                  <strong>QA Lead:</strong> Established a structured Agile
                  testing workflow with Jira integration, reducing bug
                  resolution time by 40% through clear reproduction steps and
                  severity-based prioritization.
                </li>
                <li>
                  <strong>CI/CD Pipeline:</strong> Implemented GitHub Actions
                  for automated linting, unit tests, and preview deployments on
                  every PR.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>Built by Peter Omondi · 2026</p>
        <p className="footer-sub">
          Clean Architecture · Domain Driven Design · Event-Driven Systems
        </p>
      </footer>
    </div>
  );
}

export default App;
