 const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhsR3BTL1VSSWR6QUlacTh3eDNQZGtEUDhmQkx6Z0thaG1HZDZjZzNVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjJ5UmpUaWI2M2xadVdxN2lNb1E0WnhrU3NDTDFqanBGVU9LRnN6cjZuVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SDk4OTdCd0diaEJoTnY3MlVJRG1tWGRrdDdMd0N0RGhHNzk3Sk9zMGtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR3RvUGQvY3FLU21tTldCbTRxYUpmMXA0YmR3L0gyN1ozaHNpOXNCWm1vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKN2IrNnprRFVSVklNS3NTc2hld1pYRHlIclprSzB0SDZtbDBWNnA0V0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpVWDdhQkZyL3pqaFptMlYyMlQ3WkNPa3g4eGYvTGJRUWJtRHFNN1c5SGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0grdDBzdlhIeXdQaTBVdk5QZThOWE91Szkra2dtUWYxRERKSlFvQUVtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVg5dnNqUFhmTzRoVDltVUo5SmRWZ1NlVnJqVDJiK3JKVkhkdGxVb2NCUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc4MTlLeEJOQnA0TTZZdmRxQ0JZM3dIU25sN2NBNXltVlU4bk15amRWSW8wZkNXWDB6TXZEMDNpQmdKOWRZSVh4OEtLeVV4K0Q4SXhmUFp2YmR1SUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJmU2lRZGRVWWhoZkYvcFQ5UkI0Z2Y3K2tKMXZZLzFaZTlxbjBueWR3aXZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY3NDQ3ODA4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMTA5MjRDRkJCRTg1QjI4Qjc0N0U4Nzg0MEQzREYxMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzODgwNjk1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2NzQ0NzgwODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTJBMDlDQkZGRjk3QzhEQTIzMTc1MjcwMDgxMTlDQzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0Mzg4MDY5NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3Njc0NDc4MDgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY1QUU1QTUyNDIxODM2RTY3NEYwMDREQTU5MUE2QjkxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM4ODA3MjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY3NDQ3ODA4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NThEMEEwQTc5QjgxRDk0OTZCRDJBNTcxRkRBNTVENCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzODgwNzMxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxWHR6bTB5bFFRLW4wRlhPWlNUME53IiwicGhvbmVJZCI6ImJhMmRkNjhjLWIxYWMtNGEyNS1iNzAyLTdjZjAzZTcwZDJlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UFdlaGt5a0RFZTJnNHJFTFh3K1pPQWpiTUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGdtbHVNdFpEK2s0b2ZvOUtjM1ZmQThZNVIwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZIOTVXTUNNIiwibWUiOnsiaWQiOiIyMzc2NzQ0NzgwODM6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTaGFrbyByZXRpcmVkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQzJqWFVRNW9QR3Z3WVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtaDNreHVXVnRkdjBHQVFnSkRvU2k4dEZiVmFhSEEzK1NZZkUwMXpsVFNBPSIsImFjY291bnRTaWduYXR1cmUiOiI1Vno5YnJUUmhxeVh2alhrMXRndnhpd1F5K2JoNmV0L2g5RGhnSDRsd29NbDhkam9EMjJodGsvOTZKYUFjaTBNeFBLT1FqVndoOWNhTTdSb0VOR0VCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYXZ0dU1jbmlMenVmYUNxNGQ1U1A2b3paaG9PNktBdE1kd0Q4QlNLQ09sd0xydnYzaXU2c2dnaVc1SmMyR3hwTDN5V0lEd1cvWllMUzBCTklqeEQ0QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzQ0NzgwODM6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJab2Q1TWJsbGJYYjlCZ0VJQ1E2RW92TFJXMVdtaHdOL2ttSHhOTmM1VTBnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQzODgwNjkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNmeiJ9';
const mycode = process.env.CODE || "237";
const botname = process.env.BOTNAME || 'DREADED';
const herokuAppName = process.env.HEROKU_APP_NAME || '';
const herokuApiKey = process.env.HEROKU_API_KEY || '';
const database = process.env.DATABASE_URL || '';

module.exports = {
  session,
  mycode,
  botname,
  database,
herokuAppName,
herokuApiKey
};
