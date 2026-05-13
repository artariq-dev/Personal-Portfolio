export const rewrites = [
  // Your infra breaks.
  { from: "broken deployments",        to: "automated, reliable delivery" },
  { from: "manual provisioning",       to: "fully automated infrastructure" },
  { from: "incident blindness",        to: "traced, alerted, resolved fast" },
  // Maybe clusters drift.
  { from: "configuration drift",       to: "self-healing, always in sync" },
  { from: "no visibility",             to: "full-stack observability" },
  { from: "scaling bottlenecks",       to: "elastic, production-ready clusters" },
  // Or pipelines are a gamble.
  { from: "slow release cycles",       to: "commit to production, automated" },
  { from: "secrets exposed",           to: "encrypted, zero plaintext" },
  { from: "compliance risk",           to: "policy enforced before deploy" },
  { from: "security gaps",             to: "enforced at every layer" },
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
  { q: "Your product is ready to scale. Is your infrastructure?", anchor: "#case-stories" },
  { q: "You know what broke. Do you know why it broke?", anchor: "#case-stories" },
  { q: "Your app recovered. Would it recover at 10x the traffic?", anchor: "#case-stories" },
  { q: "You have monitoring. Do you have visibility?", anchor: "#case-stories" },
  { q: "Your code is reviewed. Is your infrastructure?", anchor: "#case-stories" },
  { q: "You deploy to production. Do you trust what's running there?", anchor: "#case-stories" },
  { q: "You have a cloud budget. Do you know where it's going?", anchor: "#case-stories" },
];
