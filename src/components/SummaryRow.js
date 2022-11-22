import * as React from 'react';
import { 
  Card,
  CardContent,
  Grid 
} from '@mui/material';

const SummaryRow = ({ index, info, onClick }) => (
  <Card key={`card${index}-${info.uid}`} sx={{ width:'100%', marginBottom: 2 }}>
    <CardContent key={`card${index}-content-${info.uid}`}>
      <Grid key={`grid${index}-container-${info.uid}`} container spacing={2}>
        <Grid key={`grid${index}-col1-${info.uid}`} item xs={2}>
        {index+1}
        </Grid>
        <Grid key={`grid${index}-col2-${info.uid}`} item xs={6}>
        {info.uid}
        </Grid>
        <Grid key={`grid${index}-col3-${info.uid}`} item xs={4}>
        {info.score}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)

export default SummaryRow

SummaryRow.displayName = 'SummaryRow'