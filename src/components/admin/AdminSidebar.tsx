import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Calendar, 
  DollarSign, 
  Users, 
  Settings,
  LogOut
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/Logo';

const menuItems = [
  { title: 'Dashboard', url: '/admin/dashboard', icon: LayoutDashboard },
  { title: 'Enquiries', url: '/admin/enquiries', icon: MessageSquare },
  { title: 'Consultations', url: '/admin/consultations', icon: Calendar },
  { title: 'Sales', url: '/admin/sales', icon: DollarSign },
  { title: 'Meetings', url: '/admin/meetings', icon: Users },
  { title: 'Settings', url: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { logout } = useAuth();
  const currentPath = location.pathname;
  const collapsed = state === 'collapsed';

  const isActive = (path: string) => currentPath === path;

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50';

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent className="flex flex-col h-full">
        <div className="p-4 border-b">
          {!collapsed && <Logo className="mb-0" />}
          {collapsed && (
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavCls}>
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        {!collapsed && <span className="ml-2 truncate">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        <div className="p-4 border-t mt-auto">
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="w-full justify-start"
            size={collapsed ? 'icon' : 'default'}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}