export type PageKey =
  | 'landing'
  | 'uslugi'
  | 'produkty'
  | 'lab'
  | 'wplyw'
  | 'instytucja'
  | 'kariera'
  | 'wiedza'
  | 'kontakt'

export type NavFn = (page: PageKey, sub?: string) => void

export interface PageProps {
  navigate: NavFn
  subPage?: string | null
}
