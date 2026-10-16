import Section from "../components/Section"

function CompositionPractice() {
  return (
    <main>
        <h1>Compostion Practice</h1>

        <Section title="Profile">
                <p>Areeba</p>
                <p>Frontend Developer</p>
        </Section>

        <Section title="Skills">
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
        </Section>

        <Section title="Contact">
           <p>Email: areeba@example.com</p>
           <p>Location: Pakistan</p>
        </Section>
    </main>
  )
}

export default CompositionPractice