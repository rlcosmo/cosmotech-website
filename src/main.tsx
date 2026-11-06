import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Cloud, ShieldCheck, Network, Activity, GitBranch, ArrowUpRight, ArrowRight, Github, Linkedin, Menu, X, Terminal, Layers3, Cpu} from 'lucide-react';
import './style.css';

const github='https://github.com/rlcosmo';
const linkedin='https://www.linkedin.com/in/rafael-linhares-cosmo/';
const services=[
  {icon:Cloud,title:'Cloud Engineering',desc:'Arquitetura AWS e Azure, infraestrutura como código e automação operacional.'},
  {icon:Layers3,title:'Kubernetes & Platforms',desc:'EKS, AKS, OpenShift, containers, Istio e engenharia de plataformas.'},
  {icon:ShieldCheck,title:'Site Reliability Engineering',desc:'Confiabilidade, resposta a incidentes, observabilidade e melhoria contínua.'},
  {icon:Cpu,title:'Intelligent Automation',desc:'GitOps, CI/CD e automação orientada a processos e inteligência artificial.'}
];
const projects=[
  {name:'AWS Cloud & Serverless Lab',type:'LABORATÓRIO DOCUMENTADO',desc:'Arquiteturas serverless e infraestrutura como código. Laboratório temporário documentado em repositório público; o site não depende de serviços AWS.',stack:['AWS','Terraform','Lambda','SQS','DynamoDB'],link:'https://github.com/rlcosmo/aws-serverless-lab',icon:Cloud},
  {name:'Kubernetes & Canary Delivery',type:'CASE DE EXPERIÊNCIA PROFISSIONAL',desc:'Implantação e sustentação de Istio em AKS para liberações graduais de aplicações com estratégia Canary.',stack:['AKS','Kubernetes','Istio','Helm'],icon:Network},
  {name:'Observabilidade & SRE',type:'CASE DE EXPERIÊNCIA PROFISSIONAL',desc:'Dashboards, alertas, monitoramento e investigação de incidentes em ambientes de missão crítica.',stack:['Grafana','Zabbix','Prometheus','Dynatrace'],icon:Activity},
  {name:'GitOps & Platform Engineering',type:'ESTUDOS E IMPLEMENTAÇÕES',desc:'Automação de entregas com pipelines, GitOps e práticas de governança de mudanças.',stack:['Argo CD','GitHub Actions','Terraform','CI/CD'],icon:GitBranch}
];
function App(){
 const [mobile,setMobile]=useState(false);
 return <div className="app">
  <div className="glow glow-one"/><div className="glow glow-two"/>
  <header className="header"><div className="wrap nav">
    <a className="logo" href="#inicio" aria-label="CosmoTech Solutions - início"><span className="logo-symbol">C<span>•</span></span><span>COSMOTECH <strong>SOLUTIONS</strong></span></a>
    <nav className={mobile?'navigation visible':'navigation'} aria-label="Navegação principal">
      {[['Sobre','#sobre'],['Especialidades','#especialidades'],['Projetos','#projetos'],['Credenciais','#credenciais'],['Contato','#contato']].map(([label,url])=><a key={url} href={url} onClick={()=>setMobile(false)}>{label}</a>)}
    </nav>
    <a className="header-link" target="_blank" rel="noopener noreferrer" href={linkedin}>Conectar <ArrowUpRight size={16}/></a>
    <button className="menu" type="button" onClick={()=>setMobile(!mobile)} aria-label={mobile?'Fechar menu':'Abrir menu'} aria-expanded={mobile}>{mobile?<X/>:<Menu/>}</button>
  </div></header>
  <main>
   <section className="hero wrap" id="inicio">
    <div className="hero-content"><div className="eyebrow"><span className="status-dot"/> CLOUD ENGINEERING · SRE · DEVOPS</div>
      <h1>Engineering <em>reliable</em> cloud platforms<span className="accent">.</span></h1>
      <p className="intro">Tecnologia com propósito. Arquiteturas escaláveis, operações confiáveis e automação inteligente — da infraestrutura à entrega contínua.</p>
      <div className="actions"><a className="btn primary" href="#projetos">Explorar projetos <ArrowRight size={18}/></a><a className="btn outline" href="#sobre">Conheça a CosmoTech <ArrowUpRight size={17}/></a></div>
      <div className="metrics"><div><strong>16+</strong><span>anos de experiência</span></div><div><strong>AWS · Azure</strong><span>Cloud Engineering</span></div><div><strong>SRE</strong><span>Confiabilidade e automação</span></div></div>
    </div>
    <div className="hero-visual" aria-label="Representação gráfica de plataforma cloud">
     <div className="visual-ring ring-one"/><div className="visual-ring ring-two"/>
     <div className="visual-center"><Cloud size={52}/><strong>CLOUD PLATFORM</strong><small>RELIABLE BY DESIGN</small></div>
     <div className="floating float-top"><Activity size={16}/> OBSERVABILITY</div>
     <div className="floating float-bottom"><Terminal size={16}/> INFRASTRUCTURE AS CODE</div>
     <div className="floating float-side"><GitBranch size={16}/> GITOPS</div>
    </div>
   </section>
   <div className="techbar"><div className="wrap techbar-inner"><span>TECNOLOGIAS & PRÁTICAS</span><b>AWS</b><b>AZURE</b><b>KUBERNETES</b><b>OPENSHIFT</b><b>TERRAFORM</b><b>ISTIO</b></div></div>
   <section className="section wrap" id="especialidades"><div className="section-heading"><div><span className="kicker">01 / ESPECIALIDADES</span><h2>Engenharia para <em>o que importa.</em></h2></div><p>Da arquitetura à operação, com práticas que tornam plataformas resilientes, observáveis e sustentáveis.</p></div><div className="services">{services.map((s,i)=><article className="service" key={s.title}><div className="service-top"><span>0{i+1}</span><s.icon size={27}/></div><h3>{s.title}</h3><p>{s.desc}</p><ArrowUpRight className="service-arrow" size={20}/></article>)}</div></section>
   <section className="section project-section" id="projetos"><div className="wrap"><div className="section-heading"><div><span className="kicker">02 / PORTFÓLIO</span><h2>Projetos reais. <em>Aprendizado contínuo.</em></h2></div><p>Experiências profissionais e laboratórios documentados, sem dependências de infraestrutura ativa.</p></div><div className="projects">{projects.map((p,i)=><article className="project" key={p.name}><div className="project-illustration"><span className="project-index">0{i+1} / 04</span><div className="project-icon"><p.icon size={54} strokeWidth={1.25}/></div><small>COSMOTECH / ENGINEERING</small></div><div className="project-content"><span className="project-type">{p.type}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="chips">{p.stack.map(t=><span key={t}>{t}</span>)}</div>{p.link&&<a className="text-link" target="_blank" rel="noopener noreferrer" href={p.link}>Ver repositório público <ArrowUpRight size={16}/></a>}</div></article>)}</div></div></section>
   <section className="section wrap" id="sobre"><div className="about-panel"><div className="avatar-illustration"><span>RC</span></div><div><span className="kicker">03 / QUEM ESTÁ POR TRÁS</span><h2>Experiência que <em>vira engenharia.</em></h2><p>Sou <strong>Rafael Linhares Cosmo</strong>, SRE Senior e Cloud Engineer, com mais de 16 anos de experiência em infraestrutura e tecnologia. Minha trajetória reúne ambientes críticos, Kubernetes, automação e observabilidade.</p><p>A CosmoTech Solutions é uma marca para compartilhar conhecimento, documentar projetos e explorar soluções em engenharia de plataformas, com possibilidade de consultoria no futuro.</p><div className="social"><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={15}/></a><a href={github} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={15}/></a></div></div></div></section>
   <section className="section wrap" id="credenciais"><div className="section-heading"><div><span className="kicker">04 / FORMAÇÃO CONTÍNUA</span><h2>Conhecimento em <em>evolução constante.</em></h2></div><p>Certificações e treinamentos em cloud, automação, inteligência artificial e plataformas.</p></div><div className="credentials"><article><span>RED HAT</span><h3>OpenShift & Automation</h3><p>DO316 · DO336 · DO432 · AI267 · AD141</p></article><article><span>ORACLE</span><h3>AI Foundations</h3><p>Treinamento e certificação em fundamentos de IA</p></article><article><span>AWS</span><h3>Solutions Architect – Associate</h3><p>Certificação obtida anteriormente; verificar validade atual antes de apresentá-la como ativa.</p></article></div></section>
   <section className="contact" id="contato"><div className="wrap contact-content"><span className="kicker">05 / CONTATO</span><h2>Vamos construir <em>algo relevante?</em></h2><p>Conecte-se para falar sobre Cloud, SRE, DevOps, engenharia de plataformas e oportunidades de colaboração.</p><div className="actions"><a className="btn primary" href={linkedin} target="_blank" rel="noopener noreferrer">Conversar no LinkedIn <ArrowUpRight size={18}/></a><a className="btn outline" href={github} target="_blank" rel="noopener noreferrer"><Github size={18}/> Ver GitHub</a></div></div></section>
  </main>
  <footer className="footer"><div className="wrap footer-inner"><a className="logo" href="#inicio"><span className="logo-symbol">C<span>•</span></span><span>COSMOTECH <strong>SOLUTIONS</strong></span></a><p>© {new Date().getFullYear()} CosmoTech Solutions. Engenharia, aprendizado e evolução.</p><a href="#inicio">Voltar ao topo ↑</a></div></footer>
 </div>;
}
createRoot(document.getElementById('root')!).render(<App/>);
