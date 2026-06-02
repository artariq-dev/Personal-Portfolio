export const techNames = {
  kubernetes: "Kubernetes", terraform: "Terraform", aws: "AWS", azure: "Azure",
  digitalocean: "DigitalOcean", istio: "Istio", argo: "ArgoCD",
  prometheus: "Prometheus", grafana: "Grafana", falco: "Falco", trivy: "Trivy",
  calico: "Calico", jaeger: "Jaeger", velero: "Velero", docker: "Docker",
  githubactions: "GitHub Actions", helm: "Helm", amazonwebservices: "AWS",
  cloudflare: "Cloudflare", kustomize: "Kustomize", go: "Go",
  cosign: "Cosign", kyverno: "Kyverno", microsoftazure: "Azure",
  openpolicyagent: "OPA", nginx: "Nginx", ansible: "Ansible", k3s: "K3s",
  nuxt: "Nuxt.js", strapi: "Strapi", tailwindcss: "Tailwind CSS",
  cloudflareworkers: "Cloudflare Workers", vuedotjs: "Vue.js", unocss: "UnoCSS",
  magento: "Magento", graphql: "GraphQL", firebase: "Firebase", stripe: "Stripe",
  django: "Django", python: "Python", postgresql: "PostgreSQL", redis: "Redis",
  celery: "Celery", googleads: "Google Ads", facebook: "Facebook",
  plotly: "Plotly", anthropic: "Anthropic",
};

const iconFiles = {
  kubernetes:"kubernetes.svg", terraform:"terraform.svg", digitalocean:"digitalocean.svg",
  istio:"istio.svg", argo:"argo.svg", prometheus:"prometheus.svg", grafana:"grafana.svg",
  falco:"falco.svg", trivy:"trivy.svg", jaeger:"jaeger.svg", docker:"docker.svg",
  githubactions:"githubactions.svg", helm:"helm.svg", go:"go.svg", nginx:"nginx.svg",
  ansible:"ansible.svg", k3s:"k3s.svg", nuxt:"nuxt.svg", strapi:"strapi.svg",
  unocss:"unocss.svg", vuedotjs:"vuedotjs.svg", cloudflare:"cloudflare.svg",
  cloudflareworkers:"cloudflareworkers.svg", firebase:"firebase.svg",
  tailwindcss:"tailwindcss.svg", graphql:"graphql.svg", stripe:"stripe.svg",
  aws:"aws.svg", azure:"azure.svg", amazonwebservices:"amazonwebservices.svg",
  microsoftazure:"microsoftazure.svg", magento:"magento.svg", cosign:"cosign.svg",
  openpolicyagent:"openpolicyagent.svg", calico:"calico.svg", velero:"velero.svg",
  kyverno:"kyverno.svg", kustomize:"kustomize.svg",
  django:"django.svg", python:"python.svg", postgresql:"postgresql.svg",
  redis:"redis.svg", celery:"celery.svg", googleads:"googleads.svg", facebook:"facebook.svg",
  plotly:"plotly.svg", anthropic:"anthropic.svg", sentry:"sentry.svg", stripe:"stripe.svg",
};

export const iconUrl = (tech) => {
  const file = iconFiles[tech];
  if (file) return `${process.env.PUBLIC_URL}/icons/${file}`;
  return null;
};