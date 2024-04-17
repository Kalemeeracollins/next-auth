import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { useState } from "react";


export function middleware(request: NextRequest, isLoggedIn) {

    
        // Redirect to sign in page if not logged in
        // return NextResponse.redirect('/');
  
}

export const config = {
    // Set up middleware for '/dashboard' route
    middleware: 'route'
};