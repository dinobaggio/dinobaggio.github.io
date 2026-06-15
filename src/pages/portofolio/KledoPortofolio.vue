<script setup>
import { onMounted } from 'vue';
onMounted(() => window.scrollTo({ top: 0 }));

const categories = [
    {
        title: 'Reporting (Finance Reports)',
        badge: 'Largest Portion',
        intro: 'The most dominant module. Covers feature requests, bug fixes, query optimization, and export/print functionality.',
        color: 'orange',
        items: [
            {
                area: 'Accounts Receivable / Payable Aging',
                work: 'Due date filters, 1–2 week columns, weekly/monthly period grouping, contact & tag filters, query optimization (without indexing), landscape PDF/Excel export, dynamic actual_status for partial payments, multi-currency print/export.',
            },
            {
                area: 'Profit & Loss',
                work: 'Delta & delta_percent per period, show/hide charts, COGS percentage, show_columns toggle, optional delta in export/PDF, landscape PDF print, display zero-value rows.',
            },
            {
                area: 'Sales Detail / Sales per Product-Category-Period',
                work: 'Date & payment account columns, shipping costs & deductions, tag/customer/warehouse/salesperson filters, charts & widgets, company details, qty × price before tax.',
            },
            {
                area: 'Purchase per Product',
                work: 'Vendor name, discount per product (with percentage), return quantity, total & average after tax, "Amount" field on PO per product.',
            },
            {
                area: 'Inventory Turnover',
                work: 'Detail endpoint, expanded display, qty-based & storage duration formula, avg_storage_qty calculation, value optimization.',
            },
            {
                area: 'Stock Movement & Warehouse Stock Summary',
                work: 'Hide zero-qty filter (opening/closing), unit of measure, product photo on print, warehouse transfer column.',
            },
            {
                area: 'New Reports',
                work: 'Return per product (sales & purchase), credit/debit memo, Serial Number Stock per Warehouse + Serial Number History (with export), Daily Input Activity, sales detail by serial number.',
            },
            {
                area: 'Others',
                work: 'General journal (reference field >1000 chars, date sort), contact ledger, executive summary (ROI), payment settlement report (COA & account name).',
            },
        ],
    },
    {
        title: 'Midtrans & Billing',
        badge: null,
        intro: null,
        color: 'blue',
        items: [
            {
                area: 'Midtrans Log Processing',
                work: 'Process & sync logs for GH, CRM, and HR apps; auto-reconcile; save tags on invoice creation.',
            },
            {
                area: 'Invoice Bug Fixes',
                work: 'Negative value anomalies, idempotent callback handling, transaction recorded but invoice not created, amount discrepancy, app_id determination.',
            },
            {
                area: 'Billing Stats',
                work: 'Total First Payment (Finance & HR), billing creator agent info, admin detail in billing transaction view.',
            },
            {
                area: 'Invoice Share',
                work: 'Admin statistics + charts, CS filter/detail (IC), clickable company links, daily/monthly totals.',
            },
        ],
    },
    {
        title: 'Notifications & Email',
        badge: null,
        intro: null,
        color: 'purple',
        items: [
            {
                area: 'Price Change Notifications',
                work: 'Admin push form, send specific content, multi-attachment support, fix per app_id (HR/GH), debugging 60% discount notification.',
            },
            {
                area: 'Due Date Reminder Email',
                work: 'Refactor to job pattern, website URL validation, fix emails not sent (zero-value case), fix Sentry errors.',
            },
            {
                area: 'Low Stock Email',
                work: 'Email delay configuration, refactor to job pattern.',
            },
            {
                area: 'NPS',
                work: 'Score logging, summary view, avg score notification, pop-up recommendation mute feature.',
            },
            {
                area: 'WhatsApp',
                work: 'Send via official WA channel, auto balance top-up, validation & billing for free top-up, customize contact numbers.',
            },
        ],
    },
    {
        title: 'Features & Admin',
        badge: null,
        intro: null,
        color: 'green',
        items: [
            {
                area: 'CRM Subscription',
                work: 'Large multi-week project: admin billing CRM page, channel count per user, upgrade/renew/addon flow.',
            },
            {
                area: 'Audit Log',
                work: 'User settings/role/approval history, DB backup log, PAT, POS/Slack/Discord/webhook connect log.',
            },
            {
                area: 'Kledo Web Popover',
                work: 'Products (regular/bundle), returns, contacts, journals, accounts, warehouses, fixed assets popover integration.',
            },
            {
                area: 'Price Rules',
                work: 'Excel/CSV/PDF export, bulk delete, SKU search, import fix for duplicates, file generation error fix.',
            },
            {
                area: 'Password & Security Policy',
                work: 'Last password change tracking, force password change, outdated email detection, admin data masking.',
            },
            {
                area: 'Salesperson History',
                work: 'New table to preserve salesperson data on delete (create/update/delete events), dynamic display in detail view and graph.',
            },
            {
                area: 'Fixed Assets',
                work: 'Tag filter, non-paginated mass export, asset deletion feature, account category detail view.',
            },
            {
                area: 'Internal FAQ',
                work: 'Duplicate FAQ for GH/HR apps, edit & delete FAQ, agent filter, email column in dashboard.',
            },
            {
                area: 'Others',
                work: 'Required tag on stock adjustments, item column in expense list, bulk delete recurring invoices, lock product conversion formula, disable approval email setting.',
            },
        ],
    },
    {
        title: 'Routine Maintenance',
        badge: null,
        intro: null,
        color: 'gray',
        items: [
            {
                area: 'Sentry',
                work: 'Regular error fixes: undefined array key, ambiguous column, negative sort, and other production errors.',
            },
            {
                area: 'Pipeline / CI-CD',
                work: 'Stabilize failing tests, resolve show_columns override conflicts, fix risky test cases.',
            },
            {
                area: 'Unit Tests',
                work: 'Accompanying almost every new feature and bug fix using TransactionDataGeneratorTrait and NewBaseTestCase patterns.',
            },
        ],
    },
];
</script>

<template>
    <div class="page-wrap">
        <div class="container-page">
            <!-- Back -->
            <div class="pt-6 pb-2">
                <router-link to="/" class="back-link">← Back to Home</router-link>
            </div>

            <!-- Header -->
            <div class="page-header">
                <div class="company-logo-wrap">
                    <img src="/kledo-logo.png" alt="Kledo" class="company-logo" />
                </div>
                <h1 class="text-h3 font-bold gradient-text mt-4">Kledo Portfolio</h1>
                <p class="meta-text">Backend Developer · Prompt Engineer &nbsp;·&nbsp; Mar 2024 – Present</p>
            </div>

            <!-- Summary -->
            <div class="summary-card">
                <p>
                    During this period, the primary focus was on the <strong>Finance Reporting module</strong> — the largest workload — covering accounts receivable/payable aging, profit & loss, sales detail, purchase per product, inventory turnover, stock movement, and several new reports. This was complemented by <strong>Midtrans & Billing integration</strong> (log processing for GH/CRM/HR, auto-reconcile, billing stats, invoice share), <strong>notification & email systems</strong> (price change, due reminders, low stock, NPS, WhatsApp), and a major <strong>CRM Subscription</strong> project. All changes were accompanied by consistent maintenance: Sentry error fixes, CI/CD pipeline stabilization, and unit tests.
                </p>
            </div>

            <!-- Category Sections -->
            <div class="pb-16">
                <div
                    class="category-section"
                    v-for="cat in categories"
                    :key="cat.title"
                    :class="'border-' + cat.color"
                >
                    <div class="cat-header">
                        <h2 class="cat-title">{{ cat.title }}</h2>
                        <span v-if="cat.badge" class="cat-badge">{{ cat.badge }}</span>
                    </div>
                    <p v-if="cat.intro" class="cat-intro">{{ cat.intro }}</p>
                    <div class="work-table">
                        <div class="work-row" v-for="item in cat.items" :key="item.area">
                            <div class="work-area">{{ item.area }}</div>
                            <div class="work-desc">{{ item.work }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-wrap { min-height: 100vh; }

.back-link {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(147, 197, 253, 0.85);
    text-decoration: none;
    transition: color 0.2s;
}
.back-link:hover { color: white; }

.page-header {
    text-align: center;
    padding: 2rem 0 2rem;
}
.company-logo-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 12px;
    padding: 0.75rem 1.5rem;
}
.company-logo { height: 36px; object-fit: contain; }
.gradient-text {
    background: linear-gradient(135deg, #ffffff 40%, #fdba74);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.meta-text {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: rgba(253, 186, 116, 0.75);
}

/* Summary */
.summary-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 4px solid #f97316;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.7;
    color: rgba(219, 234, 254, 0.8);
}
.summary-card strong { color: #fdba74; }

/* Category Section */
.category-section {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    margin-bottom: 1.25rem;
    overflow: hidden;
}
.border-orange { border-left: 4px solid #f97316; }
.border-blue   { border-left: 4px solid #3b82f6; }
.border-purple { border-left: 4px solid #a855f7; }
.border-green  { border-left: 4px solid #22c55e; }
.border-gray   { border-left: 4px solid #94a3b8; }

.cat-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.cat-title {
    font-size: 1rem;
    font-weight: 700;
    color: white;
    margin: 0;
}
.cat-badge {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
    background: #f97316;
    color: white;
}
.cat-intro {
    padding: 0.625rem 1.25rem 0;
    font-size: 0.82rem;
    color: rgba(147, 197, 253, 0.65);
    font-style: italic;
}

/* Work table */
.work-table { padding: 0.5rem 0; }
.work-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background 0.15s;
}
.work-row:last-child { border-bottom: none; }
.work-row:hover { background: rgba(255, 255, 255, 0.04); }
.work-area {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #fdba74;
    border-right: 1px solid rgba(255, 255, 255, 0.07);
    display: flex;
    align-items: flex-start;
}
.work-desc {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
    color: rgba(219, 234, 254, 0.75);
    line-height: 1.6;
}

@media (max-width: 640px) {
    .work-row { grid-template-columns: 1fr; }
    .work-area { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
}
</style>
