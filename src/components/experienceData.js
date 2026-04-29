export const domains = [
  {
    title: "Cloud Architecture & Infrastructure",
    problem: "Your cloud bill grows every month and nobody can explain why. One misconfiguration away from an outage.",
    capability: "Define your infrastructure as code and that bill becomes predictable overnight. Let's map what you're running, cut what you don't need, and make sure nothing fails silently again.",
    tags: ["Terraform", "AWS", "Azure", "GCP", "HA Design", "DR Planning", "Cost Optimization"],
  },
  {
    title: "Kubernetes & Container Orchestration",
    problem: "Your app runs fine locally. In production, it crashes, scales wrong, or takes the whole cluster down with it.",
    capability: "Get the cluster config right and most of those crashes go away. Let's build a platform your app can actually run on — one that heals itself when things go wrong.",
    tags: ["kubeadm", "Helm", "Istio", "Calico CNI", "HPA/VPA", "cert-manager", "Velero"],
  },
  {
    title: "DevSecOps & Supply Chain Security",
    problem: "You don't actually know what's running in production — or whether it's been tampered with since it was built.",
    capability: "If we sign and verify every artifact before it ships, that uncertainty disappears. Let's make sure nothing reaches production unless it came from your pipeline — provably.",
    tags: ["Cosign", "SLSA L2", "Kyverno", "Falco", "Trivy", "Grype", "Syft", "OPA"],
  },
  {
    title: "CI/CD Automation & GitOps",
    problem: "Deployments are manual, stressful, and different every time. One wrong step breaks production.",
    capability: "Automate the whole pipeline and your team stops dreading release day. Let's make deployments so boring they're not even worth talking about.",
    tags: ["GitHub Actions", "ArgoCD", "Kustomize", "Helm", "Sealed Secrets", "OIDC"],
  },
  {
    title: "Observability & Reliability Engineering",
    problem: "You find out about production issues when customers complain. By then, the damage is done.",
    capability: "Set up proper alerting and tracing and you'll know before they do. Let's get your team the visibility they need to fix things fast — not after the fact.",
    tags: ["Prometheus", "Grafana", "Loki", "Jaeger", "Promtail", "SLO/SLA Design"],
  },
  {
    title: "Application Architecture & Full Stack",
    problem: "Your infrastructure and your product don't speak the same language. Deployments fail because nobody owns the gap.",
    capability: "Someone needs to own both sides — and that's where I come in. Let's align the application and the platform it runs on so deployments stop being a guessing game.",
    tags: ["React", "Vue.js", "Nuxt.js", "Node.js", "TypeScript", "Go", "Stripe", "Firebase"],
  },
];
