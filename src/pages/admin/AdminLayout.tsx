import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

const AdminLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-background px-4 sm:px-6 sticky top-0 z-40">
            <SidebarTrigger className="mr-4" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold truncate">Noorcom Fleet Admin</h2>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 bg-background overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;