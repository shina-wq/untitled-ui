import {
  BarChartSquare02,
  ChevronSelectorVertical,
  ChevronUp,
  Folder,
  HomeLine,
  LayoutAlt01,
  MessageChatCircle,
  PieChart03,
  Rows01,
  Settings01,
  Share04,
} from "@untitledui/icons"
import avatar from "@/assets/avatar.jpg"
import { Logo } from "@/components/logo"
import { SearchInput } from "@/components/search-input"
import { Avatar, AvatarFallback, AvatarImage, AvatarStatus } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

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
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <Logo className="h-6 w-auto self-start text-text-primary" />
        <SearchInput />
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
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarMenu>
            <Collapsible defaultOpen render={<SidebarMenuItem className="py-0" />}>
              <CollapsibleTrigger render={<SidebarMenuButton className="my-px" />}>
                <Folder />
                Folders
                <ChevronUp className="ml-auto size-4 rotate-180 transition-transform group-data-panel-open/menu-button:rotate-0" />
              </CollapsibleTrigger>
              <CollapsibleContent render={<SidebarMenuSub />}>
                {folders.map(({ title, count }) => (
                  <SidebarMenuSubItem key={title}>
                    <SidebarMenuSubButton render={<a href="#" />}>
                      {title}
                      <Badge className="ml-auto">{count}</Badge>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

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
                <MessageChatCircle />
                Support
                <Badge variant="modern" color="green" dot className="ml-auto">
                  Online
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="#" target="_blank" rel="noreferrer" />}>
                <LayoutAlt01 />
                Open in browser
                <Share04 className="ml-auto size-4" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <AccountCard />
      </SidebarFooter>
    </Sidebar>
  )
}

function AccountCard() {
  return (
    <div className="relative flex items-center gap-2 rounded-xl bg-bg-primary_alt p-3 ring-1 ring-border-secondary ring-inset">
      <Avatar>
        <AvatarImage src={avatar} alt="" />
        <AvatarFallback>OR</AvatarFallback>
        <AvatarStatus />
      </Avatar>
      <div className="min-w-0 text-sm">
        <p className="truncate font-semibold text-text-primary">Olivia Rhye</p>
        <p className="truncate text-text-tertiary">olivia@untitledui.com</p>
      </div>
      <button
        type="button"
        aria-label="Open account menu"
        className="absolute top-[7px] right-[7px] rounded-sm p-1.5 text-fg-quaternary transition-colors outline-none hover:bg-bg-primary_hover hover:text-fg-quaternary_hover focus-visible:focus-ring"
      >
        <ChevronSelectorVertical className="size-4" />
      </button>
    </div>
  )
}
