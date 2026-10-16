import ScrollZoomHero from "./components/ScrollZoomHero";

const booking = 'mailto:daena@takegoodcareconsulting.com?subject=Free%20discovery%20session';
const services = [
 ['Community & Indigenous Partnerships','Community-based research and engagement that follows the leadership of the people it serves.'],
 ['Communications & Storytelling','Trauma-informed communications and grant writing that share your impact and bring in the funding to sustain it.'],
 ['Strategic Planning & Capacity Building','Strategic planning, organizational development, project management and curriculum design that leave your team stronger.'],
 ['Research & Evaluation','Program evaluation that shows what’s working, meets funder requirements and builds your own capacity to keep measuring.'],
 ['Non-Profit & Social Impact Sectors','I know how your sector runs: tight budgets, big mandates and funders to report to. My support is built for that reality.'],
];
const values = [
 ['Justice','Working toward social transformation and an end to systemic marginalization and oppression'],
 ['Care','Human-centred consulting for human-centred outcomes'],
 ['Critical thinking','Academic and sector experience working for your community'],
 ['Continuous improvement','Learning and growing alongside the communities I serve'],
 ['Equity','Anti-racist and anti-oppressive practice, from process to outcomes'],
];
function Arrow(){return <span aria-hidden="true">↗</span>}
function Brand(){return <a className="brand" href="#home" aria-label="Take Good Care Consulting home"><img src="/images/logo.png" className="logo" /></a>}
export default function Home(){return <>
<a className="skip-link" href="#main">Skip to content</a>
<header><div className="nav-wrap"><Brand/><nav aria-label="Main navigation"><a href="#services">What I do</a><a href="#about">About</a><a href="#values">Values</a><a className="nav-contact" href="#contact">Let’s connect <Arrow/></a></nav><details className="mobile-nav"><summary aria-label="Toggle navigation menu">
  <span className="hamburger" aria-hidden="true">
    <span />
    <span />
    <span />
  </span>
</summary><nav aria-label="Mobile navigation"><a href="#services">What I do</a><a href="#about">About</a><a href="#values">Values</a><a href="#contact">Let’s connect</a></nav></details></div></header>
<main id="main"><section className="hero" id="home"><ScrollZoomHero booking={booking} /></section>
<section id="intro" className="intro wrap section"><div><h2><em>What I do</em></h2></div><div className="intro-copy"><p>I bring together research, strategy, communications and storytelling to help you build capacity, strengthen systems and bring your vision to life.</p><p>Your time is valuable, and no one can be everywhere at once.</p><p>With more than 15 years in non-profit leadership, education, community-based research and program evaluation, I take on the work that needs to be done well: delivering on your biggest moments, telling your success stories and making the most of your funding.</p><p>You get high-quality work and your time back, so you can take good care of your clients and staff.</p></div></section>
<section id="services" className="services section"><div className="wrap services-layout"><div className="services-heading"><h2>I work at<br/><em>the intersection of</em></h2></div><div className="service-list">{services.map(([title,description],i)=><article className="service" key={title}><span className="number">0{i+1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}<br />
<p>Working on something specific?</p><a className="text-link" href={booking}>Book a free discovery session and we’ll build a custom package around it. <Arrow/></a></div></div></section>
<section id="about" className="about wrap section"><div className="portrait-block"><div className="portrait-frame"><img src="/images/daena-crosby.webp" alt="Daena Crosby, founder of Take Good Care Consulting" loading="lazy"/></div><div className="portrait-caption"><span>Daena Crosby, PhD</span><span>Founder</span></div></div><div className="about-copy"><h2>Hi,<br/><em>I'm Daena</em></h2><p>I’ve spent more than 15 years in the non-profit sector working alongside Indigenous communities and young people. After completing a PhD in Sociology at the University of Alberta, my work has taken me across Canada, partnering with communities to build a better world.</p><p>I bring my background as an academic, researcher and writer, along with a real love for people, to support communities and organizations to do their best work. Everything I do is grounded in the invitation to work together built on trust, respect, collaboration and good relationships.</p><a className="text-link" href="#contact">Let’s get to know each other <Arrow/></a></div></section>
<section id="values" className="values section"><div className="wrap"><div className="values-heading"><h2>Guiding values</h2></div><div className="values-grid">{values.map(([title,text],i)=><article key={title}><span className="value-marker" aria-hidden="true">0{i+1} </span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
<div className="landscape"><img src="/images/prairie.webp" alt="A river winding through an open prairie valley" loading="lazy"/></div>
<section id="contact" className="contact section wrap"><div><h2>Let’s build what’s<br/>possible, <em>together.</em></h2><p>Questions or ideas? I’m all ears! Book a free discovery session or reach out directly.</p><a className="button" href={booking}>Book a free discovery session <Arrow/></a></div><aside><a href="mailto:daena@takegoodcareconsulting.com">daena@takegoodcareconsulting.com <Arrow/></a><a href="tel:+15873552511">587.355.2511 <Arrow/></a><p>Services delivered remotely and in person across Canada.</p></aside></section>
</main><footer><div className="wrap"><div className="footer-top"><Brand/><p>Take Good Care Consulting acknowledges that reconciliation requires action that follows the leadership of Indigenous communities. As visitors on this land, we honour, stand with, and have a responsibility to the land, water, and Indigenous people and communities of the traditional territories of the Blackfoot Confederacy (Siksika, Kainai, Piikani), the Tsuut’ina, the Îyâxe Nakoda Nations, and the Métis Nation (Region 3) in Treaty 7 and across Turtle Island.</p></div><div className="footer-bottom"><span>© 2026 Take Good Care Consulting Ltd.</span><a href="#home">Back to top ↑</a></div></div></footer>
</>}
