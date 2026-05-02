export const rewrites = [
  { from: "Broken deployments",        to: "Automated, reliable delivery" },
  { from: "Security gaps",             to: "Enforced at every layer" },
  { from: "Manual infrastructure",     to: "Fully automated provisioning" },
  { from: "Secrets exposed",           to: "Encrypted, zero plaintext" },
  { from: "No visibility",             to: "Full-stack observability" },
  { from: "Configuration drift",       to: "Self-healing, always in sync" },
  { from: "Scaling bottlenecks",       to: "Elastic, production-ready" },
  { from: "Slow release cycles",       to: "Commit to production, automated" },
  { from: "Compliance risk",           to: "Policy enforced before deploy" },
  { from: "Incident blindness",        to: "Traced, alerted, resolved fast" },
];

export const tools = [
  "Kubernetes", "Terraform", "AWS", "Azure", "ArgoCD", "Istio", "Falco", "Kyverno",
  "Cosign", "Prometheus", "Grafana", "GitHub Actions", "Helm", "OPA", "Trivy", "Vault",
  "SLSA", "Syft", "Loki", "Jaeger", "Calico", "cert-manager", "Velero", "Grype",
];

export const keywords = [
  "Cloud Architecture", "CI/CD Pipelines", "Container Orchestration",
  "Infrastructure Automation", "Security Enforcement", "Observability",
  "GitOps", "Supply Chain Security", "Scalability Engineering", "Zero-Trust Design",
];

export const questions = [
  { q: "Your last deployment took down production for 2 hours. How much did that cost you — and how do you make sure it never happens again?", anchor: "#case-studies" },
  { q: "Your team ships fast, but every release feels like a gamble. What would it mean to deploy with confidence, every single time?", anchor: "#case-studies" },
  { q: "You're scaling fast. Your infrastructure bill is scaling faster. Who's making sure your cloud spend is actually justified?", anchor: "#case-studies" },
  { q: "A security breach just made the news. Your customers are asking if their data is safe. What's your answer?", anchor: "#case-studies" },
  { q: "Your engineers spend more time firefighting infrastructure than building product. What's that costing your roadmap?", anchor: "#case-studies" },
  { q: "You passed the audit — but only after three weeks of scrambling. What would it look like if compliance was always ready?", anchor: "#case-studies" },
  { q: "Your competitor ships daily. You ship monthly. What's standing between you and that kind of velocity?", anchor: "#case-studies" },
  { q: "You're hiring senior engineers, but they're leaving because the infrastructure is a mess. What's the real cost of that?", anchor: "#case-studies" },
  { q: "Your platform goes down at peak traffic — every time. Is that an infrastructure problem, or a business problem?", anchor: "#case-studies" },
  { q: "You have three environments. Nobody's sure which one matches production. How many bugs has that shipped?", anchor: "#case-studies" },
  { q: "A new engineer joined last week. They still can't deploy. How much onboarding friction is your platform creating?", anchor: "#case-studies" },
  { q: "Your CTO wants a zero-downtime release strategy. Your current pipeline can't deliver it. What's the gap?", anchor: "#case-studies" },
  { q: "You're pitching enterprise clients. They ask about your security posture. Do you have a real answer — or a vague one?", anchor: "#case-studies" },
  { q: "Your infrastructure is held together by one person who knows how everything works. What happens when they leave?", anchor: "#case-studies" },
  { q: "You want to expand to a new region. How long would it take to replicate your entire infrastructure there?", anchor: "#case-studies" },
  { q: "Your team is blocked waiting for infrastructure changes that take days. What would same-day provisioning unlock for them?", anchor: "#case-studies" },
  { q: "You're spending on cloud but have no visibility into what's actually running or why. Is that acceptable?", anchor: "#case-studies" },
  { q: "An incident happened at 3am. Nobody knew until customers complained. How much damage could earlier detection have prevented?", anchor: "#case-studies" },
  { q: "You want to move fast without breaking things. Right now, you're doing one or the other. Which one are you sacrificing?", anchor: "#case-studies" },
  { q: "Your product is ready to scale. Is your infrastructure?", anchor: "#case-studies" },
];
