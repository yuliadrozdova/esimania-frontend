import React from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function BreadcrumbsComponent({ items, unclickableLabel }) {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumbs">
      {items.map((item, index) => (
        <Link key={index} color="neutral" href={item.link}>
          {item.label}
        </Link>
      ))}
      <Typography>{unclickableLabel}</Typography>
    </Breadcrumbs>
  );
};