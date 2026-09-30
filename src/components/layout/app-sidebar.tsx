import { useState } from "react"
import {
  BarChartSquare02,
  ChevronSelectorVertical,
  ChevronUp,
  Folder,
  HomeLine,
  LifeBuoy01,
  LinkExternal01,
  PieChart03,
  Rows01,
  SearchLg,
  Settings01,
} from "@untitledui/icons"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/logo"

const mainNav = [
  { title: "Home", icon: HomeLine },
  { title: "Dashboard", icon: BarChartSquare02, active: true },
  { title: "Projects", icon: Rows01 },
]

const folders = [
  { title: "View all", count: 18 },
  { title: "Recent", count: 8 },
  { title: "Favorites", count: 6 },
  { title: "Shared", count: 4 },
]

const secondaryNav = [
  { title: "Reporting", icon: PieChart03 },
  { title: "Settings", icon: Settings01 },
]

export function AppSidebar() {
  const [foldersOpen, setFoldersOpen] = useState(true)

  return (
    <Sidebar variant="floating">
      <SidebarHeader className="gap-4">
        <Logo className="h-8 w-auto text-text-primary" />
        <div className="relative">
          <SearchLg className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-quaternary" />
          <SidebarInput placeholder="Search" className="pl-9 pr-12" />
          <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border-secondary px-1 text-xs text-text-quaternary">
            ⌘K
          </kbd>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {mainNav.map(({ title, icon: Icon, active }) => (
              <SidebarMenuItem key={title}>
                <SidebarMenuButton isActive={active} render={<a href="#" />}>
                  <Icon />
                  {title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            <Collapsible open={foldersOpen} onOpenChange={setFoldersOpen}>
              <SidebarMenuItem>
                <CollapsibleTrigger render={<SidebarMenuButton />}>
                  <Folder />
                  Folders
                  <ChevronUp
                    className={`ml-auto transition-transform ${foldersOpen ? "" : "rotate-180"}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="mx-0 border-l-0 px-0 pl-8">
                    {folders.map(({ title, count }) => (
                      <SidebarMenuSubItem key={title}>
                        <SidebarMenuSubButton render={<a href="#" />}>{title}</SidebarMenuSubButton>
                        <SidebarMenuBadge className="rounded-full border border-border-secondary">
                          {count}
                        </SidebarMenuBadge>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="mx-0" />

        <SidebarGroup>
          <SidebarMenu>
            {secondaryNav.map(({ title, icon: Icon }) => (
              <SidebarMenuItem key={title}>
                <SidebarMenuButton render={<a href="#" />}>
                  <Icon />
                  {title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="#" />}>
                <LifeBuoy01 />
                Support
              </SidebarMenuButton>
              <SidebarMenuBadge className="gap-1 rounded-md border border-border-secondary px-1.5 text-text-secondary">
                <span className="size-1.5 rounded-full bg-fg-success-secondary" />
                Online
              </SidebarMenuBadge>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="#" />}>
                <LinkExternal01 className="order-last ml-auto" />
                Open in browser
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="border border-border-secondary shadow-xs">
              <div className="relative">
                <Avatar className="size-8">
                  <AvatarFallback>OR</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 size-2 rounded-full bg-fg-success-secondary ring-2 ring-bg-primary" />
              </div>
              <div className="grid flex-1 text-left text-xs leading-tight">
                <span className="truncate font-semibold text-text-secondary">Olivia Rhye</span>
                <span className="truncate text-text-tertiary">olivia@untitledui.com</span>
              </div>
              <ChevronSelectorVertical className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}