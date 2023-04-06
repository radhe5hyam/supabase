export interface WeekDayProps {
  title: string
  shipped: boolean
  date: string
  publishedAt: string
  description: string
  d: number
  dd: string
  youtube_id: string
  blogpost: string
  docs: string
  steps: {
    title: string
    blog?: string
    docs?: string
    description?: string
    github?: string
    hackernews?: string
    isNew?: boolean
    thumb?: string
    url?: string
    youtube_id?: string
  }[]
}

export const endOfLW7 = '2023-04-16T23:59:59.999-07:00'

const days: WeekDayProps[] = [
  {
    title: 'AI generated OG images',
    shipped: true,
    date: '',
    publishedAt: '2023-04-05T07:00:00.000-07:00',
    description: 'AI generated OG images',
    d: 0,
    dd: 'Pre-release',
    youtube_id: '',
    blogpost: 'https://supabase.com/blog/new-supabase-docs-built-with-nextjs',
    docs: 'https://supabase.com/docs',
    steps: [
      {
        title: 'AI generated OG images',
        blog: '/blog/',
        docs: '',
        isNew: false,
        description: '',
        thumb: '/images/launchweek/seven/day0/ai-images-thumb.png',
      },
      {
        title: 'Supavisor',
        github: 'github_link',
        hackernews: 'hackernews_link',
      },
    ],
  },
  {
    title: 'Self-hosted Logs & observability',
    shipped: false,
    date: '10 Apr 2023',
    publishedAt: '2023-04-10T07:00:00.000-07:00',
    description: 'Supabase Docs',
    d: 1,
    dd: 'Monday',
    youtube_id: 'OpPOaJI_Z28',
    blogpost: 'https://supabase.com/blog/new-supabase-docs-built-with-nextjs',
    docs: 'https://supabase.com/docs',
    steps: [
      {
        title: 'Supabase Docs',
        blog: '/blog/new-supabase-docs-built-with-nextjs',
        docs: '/docs',
        isNew: true,
        description: '',
        thumb: '/images/launchweek/seven/day1/self-hosted-logs-thumb.png',
      },
    ],
  },
  {
    title: 'Self-hosted Edge Functions',
    shipped: false,
    date: '11 Apr 2023',
    publishedAt: '2023-04-11T07:00:00.000-07:00',
    description: 'Image Transformations',
    d: 2,
    dd: 'Tuesday',
    youtube_id: 'iqZlPtl_b-I',
    blogpost: 'https://supabase.com/blog',
    docs: 'https://supabase.com/docs',
    steps: [
      {
        title: 'Image Transformations',
        blog: '',
        docs: '',
        isNew: true,
        description: '',
        thumb: '/images/launchweek/seven/day2/self-hosted-edge-functions-thumb.png',
      },
      {
        title: 'Smart CDN',
        description: 'Faster asset delivery, now even faster.',
        blog: '/blog/storage-image-resizing-smart-cdn',
        docs: '/docs/guides/storage/cdn',
        isNew: true,
      },
    ],
  },
  {
    title: 'Storage v3  Multipart upload',
    shipped: false,
    date: '12 Apr 2023',
    publishedAt: '2023-04-12T07:00:00.000-07:00',
    description: 'Storage v3  Multipart upload',
    d: 3,
    dd: 'Wednesday',
    youtube_id: 'CGZr5tybW18',
    blogpost: 'https://supabase.com/blog',
    docs: 'https://supabase.com/docs',
    steps: [
      {
        title: 'Storage v3  Multipart upload',
        blog: '/blog/mfa-auth-via-rls',
        docs: '/docs/guides/auth/auth-mfa',
        isNew: false,
        description: '',
        thumb: '/images/launchweek/seven/day3/storage-v3-thumb.png',
      },
    ],
  },
  {
    title: 'SSO Support for Projects',
    shipped: false,
    date: '13 Apr 2023',
    publishedAt: '2023-04-13T07:00:00.000-07:00',
    description: 'Supabase Wrappers',
    d: 4,
    dd: 'Thursday',
    youtube_id: 'QA2qC5F-4OU',
    blogpost: '/blog/postgres-foreign-data-wrappers-rust',
    docs: 'https://supabase.com/docs',
    steps: [
      {
        title: 'Supabase Wrappers',
        blog: '/blog/postgres-foreign-data-wrappers-rust',
        docs: 'https://supabase.github.io/wrappers/',
        isNew: true,
        description: '',
        thumb: '/images/launchweek/seven/day4/SSO-support-thumb.png',
      },
    ],
  },
  {
    title: 'Community Highlight',
    shipped: false,
    date: '14 Apr 2023',
    publishedAt: '2023-04-14T07:00:00.000-07:00',
    description: 'Vault Release',
    d: 5,
    dd: 'Friday',
    youtube_id: '6bGQotxisoY',
    blogpost: 'https://supabase.com/blog',
    docs: 'https://supabase.com/docs',
    steps: [
      {
        title: 'Vault Release',
        blog: '/blog/vault-now-in-beta',
        isNew: true,
        description: '',
        thumb: '/images/launchweek/seven/day0/ai-images-thumb.png',
      },
      {
        title: 'Transparent Column Encryption',
        description: '',
        blog: '/blog/transparent-column-encryption-with-postgres',
        isNew: true,
      },
    ],
  },
]

export default days
