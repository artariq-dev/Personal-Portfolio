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
  { q: "Your product is ready to scale. Is your infrastructure?", anchor: "#case-studies" },
  { q: "You know what broke. Do you know why it broke?", anchor: "#case-studies" },
  { q: "Your app recovered. Would it recover at 10x the traffic?", anchor: "#case-studies" },
  { q: "You have monitoring. Do you have visibility?", anchor: "#case-studies" },
  { q: "Your code is reviewed. Is your infrastructure?", anchor: "#case-studies" },
  { q: "You deploy to production. Do you trust what's running there?", anchor: "#case-studies" },
  { q: "You have a cloud budget. Do you know where it's going?", anchor: "#case-studies" },
];
