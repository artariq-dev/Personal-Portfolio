export const rewrites = [
  { from: "wasted cloud spend",           to: "predictable, optimised costs" },
  { from: "broken deployments",           to: "boring, reliable releases" },
  { from: "security gaps you don't know",  to: "built-in protection" },
  { from: "slow delivery",                to: "ship changes in hours, not weeks" },
  { from: "no visibility into your stack", to: "know exactly what's happening" },
  { from: "scaling anxiety",              to: "confidence at any size" },
  { from: "tech debt pain",               to: "software that stays clean" },
  { from: "one person as a single point of failure", to: "a team that can survive anything" },
  { from: "unexplained outages",          to: "quiet nights and weekends" },
  { from: "expensive guesswork",          to: "one honest conversation" },
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
  { q: "You're paying for cloud every month. Do you know where it all goes?", anchor: "#case-stories" },
  { q: "Your team ships updates. Who finds out first when something breaks — you or your customers?", anchor: "#case-stories" },
  { q: "You hired developers to build software. Is it actually delivering what you paid for?", anchor: "#case-stories" },
  { q: "If your main system went down right now, how long before it hurts your business?", anchor: "#case-stories" },
  { q: "Every slow page load costs you customers. Are you tracking it?", anchor: "#case-stories" },
  { q: "Your most critical tech — does only one person know how it works?", anchor: "#case-stories" },
  { q: "You have a cloud budget. Is it buying you growth — or just burning cash?", anchor: "#case-stories" },
];
