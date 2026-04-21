
import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  beneficiary?: string;
  description: string;
  details: string[];
  status?: string;
  imageUrl?: string;
  images?: string[];
  investment?: string;
  expectedReturn?: string;
  duration?: string;
  grantAmount?: string;
  logo?: React.ReactNode;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
  pledgeAmount?: string;
}
    