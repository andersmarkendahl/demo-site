/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { Server } from './sections/Server';
import Stack from '@mui/material/Stack';

export const App = () => (
  <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }}
  >
    <Stack spacing={8}>
      <Server />
      <Contact />
    </Stack>
    <div css={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      marginBottom: '16px',
    }}
    >
      <Footer />
    </div>
  </div>
);
