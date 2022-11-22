import * as React from 'react';
import { 
  Card,
  CardContent,
  Grid 
} from '@mui/material';

import { RowContent } from '../interfaces'

const SummaryRow = (props:RowContent) => (
  <Card key={`card${props.index}-${props.info.uid}`} sx={{ maxWidth: 800, marginBottom: 2 }}>
    <CardContent key={`card${props.index}-content-${props.info.uid}`}>
      <Grid key={`grid${props.index}-container-${props.info.uid}`} container spacing={2}>
        <Grid key={`grid${props.index}-col1-${props.info.uid}`} item xs={2}>
        {props.index+1}
        </Grid>
        <Grid key={`grid${props.index}-col2-${props.info.uid}`} item xs={6}>
        {props.info.uid}
        </Grid>
        <Grid key={`grid${props.index}-col3-${props.info.uid}`} item xs={4}>
        {props.info.score}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)

export default SummaryRow

SummaryRow.displayName = 'SummaryRow'