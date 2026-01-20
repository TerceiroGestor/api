"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function AppBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link href="/">
        <HomeIcon fontSize="small" />
      </Link>
      {items.map((item, index) =>
        item.href ? (
          <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="text.primary">
            {item.label}
          </Typography>
        ),
      )}
    </Breadcrumbs>
  );
}
