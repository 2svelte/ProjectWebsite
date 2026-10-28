export type Project = {
  title: string;
  slug: string;
  desc: string;
  skills?: string[];
};

export const projects: Project[] = [
  {
    title: "Freight Reconciliation",
    slug: "freight-reconciliation",
    desc: "An automated audit engine that cross checks carrier invoices, contract rates, and GPS telematics to stop billing leakage. It flags overcharges and auto-generates clause-backed dispute memos you can review and dispatch with a single click via an integrated email pipeline, without ever touching Outlook.",
    skills: [
      "AI & LLM Integration (OpenAI)",
      "Power Automate",
      "Automated KPI Alerting (Power Automate)",
      "Python & Pandas",
      "Workflow Automation",
      "Dynamic Measure Branching (DAX)",
      "Root-Cause Variance Analysis",
      "Automated Exception Alerting",
      "Margin Protection",
      "Automated Dispatch / ERP Write-Back",
      "RESTful API Consumption & Integration",
      "Email pipeline integration (Outlook, Gmail)",
    ],
  },
  {
    title: "Retail Demand Planning and S&OP Copilot",
    slug: "retail-demand-planning-sop-copilot",
    desc: "A retail demand planning copilot that turns messy POS scanner data into 12-week forecasts, simulates stockout risks, and uses AI to automate monthly S&OP briefs. Provides an intuitive workbench to run scenario simulations, track SKU health, and audit forecast accuracy metrics (MAPE, bias) without building complex spreadsheets from scratch.",
    skills: [
      "Predictive Time-Series Forecasting",
      "Inventory Risk & Depletion Simulation",
      "Automated KPI Alerting (Power Automate)",
      "Python",
      "Matplotlib & Seaborn",
      "Demand Forecasting",
      "Data Governance & Hygiene Auditing",
      "AI & LLMs Integration (OpenAI)",
    ],
  },
];
