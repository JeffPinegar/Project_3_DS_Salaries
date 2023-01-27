/*
Jeff Pinegar
Project 3: Data Science Salaries
Due Date: Jan. 30 2023

Team Members: Ariel Jones, Joe Liang, Kristina Mulholland, Jeff Pinegar
Data Source: https://www.kaggle.com/datasets/ruchi798/data-science-job-salaries?select=ds_salaries.csv
*/


/* Create the Data Science Database */
CREATE DATABASE "Data_Science_Salary"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


/* Create table for Data Science Table */
CREATE TABLE public."DS_Salary"
(
    id integer  NOT NULL,
    work_year integer  NOT NULL,
    experience_level character varying(2) NOT NULL,
    employment_type character varying(2) NOT NULL,
    job_title character varying(50) NOT NULL,
    salary integer  NOT NULL,
    salary_currency character varying(3) NOT NULL,
    salary_in_usd integer  NOT NULL,
    employee_residence character varying(2) NOT NULL,
    remote_ratio integer  NOT NULL,
    company_location character varying(2) NOT NULL,
    company_location_3Char character varying(3) NOT NULL,
    comp_size character varying(1) NOT NULL,
    Experience character varying(50) NOT NULL,
    Emply_Type character varying(20) NOT NULL,
    Country_Company character varying(50) NOT NULL,
    Country_Emply character varying(50) NOT NULL,
    Company_size character varying(50) NOT NULL,
    Category character varying(20) NOT NULL,
    Remote_Work character varying(10) NOT NULL,
    Machine_learning character varying(20) NOT NULL,

    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public."DS_Salary"
    OWNER to postgres;