import { Container } from '../../global'
import { DivModule, FormHero, HeroTitle } from './Hero.module'

const Hero = () => (
  <FormHero>
    <Container>
      <DivModule>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </DivModule>
    </Container>
  </FormHero>
)

export default Hero
