// Purpose: Demonstrate budgeted queue processing without PostgreSQL or network.
import{MemoryQueue,work,status}from'../src/index.mjs';const q=new MemoryQueue([{rowKey:'1'},{rowKey:'2'}]);console.log(await work(q,async r=>({decision:r.rowKey==='1'?'yes':'no',probability:.8,version:1}),{costPerRow:.0001}));console.log(q.writes,status(q.writes,1));
