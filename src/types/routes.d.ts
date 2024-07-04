interface DashboardRoute {
  id: string
  name: string
  list?: string
  show?: string
  create?: string
  edit?: string
}

type DashboardRoutes = DashboardRoute[]
