import PageShell from "../components/common/PageShell"

import HeroCard from "../components/home/HeroCard"

import { SOCIAL_LINKS } from "../data/home"

/**
 * Home renders the landing page: a centered, editorial hero (avatar, name,
 * focus-area chips, bio and actions).
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <PageShell>
      <HeroCard connectItems={SOCIAL_LINKS} />
    </PageShell>
  )
}
