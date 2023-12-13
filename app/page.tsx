import { Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page",
};

export default function Home() {
  return (
    <Typography>Test</Typography>
  );
}