require("dotenv").config();
module.exports = {
  database: process.env.DB_AWS_DATABASE,
  username: process.env.DB_AWS_USER,
  password: process.env.DB_AWS_PASSWORD,
  host: process.env.DB_AWS_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_AWS_PORT,
  NODE_ENV: process.env.NODE_ENV,
  SECURITY_GROUP_ID: process.env.AWS_SECURITY_GROUP_ID,
  SUBNET1_ID: process.env.AWS_SUBNET1_ID,
  SUBNET2_ID: process.env.AWS_SUBNET2_ID,
  SUBNET3_ID: process.env.AWS_SUBNET3_ID,
  SUBNET4_ID: process.env.AWS_SUBNET4_ID,
  SUBNET5_ID: process.env.AWS_SUBNET5_ID,
  SUBNET6_ID: process.env.AWS_SUBNET6_ID,
};
