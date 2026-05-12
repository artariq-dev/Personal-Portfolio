import Marquee from 'react-fast-marquee';

const tools = [
  "Kubernetes", "Terraform", "AWS", "Azure", "ArgoCD", "Istio", "Falco", "Kyverno",
  "Cosign", "Prometheus", "Grafana", "GitHub Actions", "Helm", "OPA", "Trivy", "Vault",
  "SLSA", "Syft", "Loki", "Jaeger", "Calico", "cert-manager", "Velero", "Grype",
];

const Row = ({ direction = 'left' }) => (
  <Marquee direction={direction} speed={32} pauseOnHover gradient={false}>
    {tools.map((t, i) => (
      <span key={i} className="text-xs text-gray-400 dark:text-gray-500 mx-6 whitespace-nowrap tracking-wider uppercase">{t}</span>
    ))}
  </Marquee>
);

const TechStrip = () => (
  <div className="tech-strip w-full border-t border-b border-gray-100 dark:border-gray-800 py-3 space-y-2 bg-gray-50 dark:bg-gray-900">
    <Row />
    <Row direction="right" />
  </div>
);

export default TechStrip;
