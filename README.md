<h1>Project 3: Salaries in Data Science  ----> https://jeffpinegar.github.io/index.html</h1> <br>

Team Members: Ariel Jones, Joe Liang, Kristina Mulholland, Jeff Pinegar <br>
Jan. 30, 2023  <br>
Jeffpinegar1@gmail.com <br>
717-982-0516 <br> <br>

<hr><h2>.\Project_3_DS_Salaries\</h2>
<h3>DataScience_Salaries.pptx</h3> Powerpoint describing the project
<h3>index.html</h3> Home page for the website. I also shows a quick analysis of the data set indicating its validity and limitation for our research.
<h3>Ariel.html</h3> html code for the Salaries and Company Size page
<h3>data.html</h3> html code for the data page
<h3>DS_Salary_Create_goeJSON.ipynb</h3> Python code use to generate the geoJSON needed for the map visualization.
<h3>ETL_DS_Salary_Data.ipynb</h3> Python code use to clean data, push data into Postgres data base and generate the html code for the data table on the data page.
<h3>Jeff_Machine_Learning.html</h3> html code for a deeper dive into machine learning salaries
<h3>Joe_Experience_Impact.html</h3> html code for the page showing the relationship between experience and salary.
<h3>Joe_Position_Impact.html</h3> html code for the page showing the relationship between job title and salary.
<h3>Kristina_Location.html</h3> html code for the location page (map) showing where the highest salaries in Data Science can be found.
<br><br>
<hr><h2>.\Project_3_DS_Salaries\assets\css\</h2>
<h3>bootstrap.min.css</h3>  Boot strap CSS file
<h3>leaflet.css</h3> leaflet CSS file
<h3>styles.css</h3> Our CSS file use for multiple html pages
<br><br>
<hr><h2>.\Project_3_DS_Salaries\assets\images\</h2>
<h3>Fig_1_Summary_Statistics.png</h3> Summary Statistics for the entire data set.
<h3>Fig_2_Years.png</h3> Pie chart showing there is adequate data in each of the years for analysis.
<h3>Fig_3_Job_Category.png</h3> Pie chart showing there is adequate data in each of the job categories for analysis.
<h3>Fig_4_Experience.png</h3> Pie chart showing there is adequate data in each of the experience categories for analysis.
<h3>Fig_5_Remote_Work.png</h3> Pie chart showing there is adequate data in each of the remote working categories for analysis.
<h3>Fig_6_Employ_Type.png</h3> Pie chart showing there is adequate data in each of the employment types for analysis.<br>
<br><br>
<hr><h2>.\Project_3_DS_Salaries\data\</h2>
<h3>cc_Salary.geojson</h3> geoJSON file use for the choropleth map.  This was a combination (merge) of countries.geojson and our data set.
<h3>countries.geojson</h3> geoJSON file containing the polygon information for the choropleth map.  This information was combined with the data set to make the cc_Salary.geoJSON
<h3>ds_salaries_original.csv</h3> This is the original dataset as pulled from Kaggle.com
<h3>DS_Salary.csv</h3> This is our cleaned and augmented dataset.
<h3>Postgres_create_table.sql</h3> This is the SQL code for creating our database and the data table.  Python (ETL_DS_Salary_Data.ipynb) was used to upload our data into the database.
<br><br>
<hr><h2>.\Project_3_DS_Salaries\static\js\</h2>
<h3>AJBarChart.js</h3> JavaScript code for the visualization on the Salaries and Company Size page.
<h3>AJBarChart2.js</h3> JavaScript code for the visualization on the Salaries and Company Size page.
<h3>AJBarChart3.js</h3> JavaScript code for the visualization on the Salaries and Company Size page.
<h3>AJBarChart4.js</h3> JavaScript code for the visualization on the Salaries and Company Size page.
<h3>ExperienceChart.js</h3> JavaScript code for the visualization on the Salaries and Experience page.
<h3>choropleth.js</h3> JavaScript code from Leaflet for choropleth maps.
<h3>kmChoroplethLocation.js</h3> JavaScript code for the visualization on the Average Salary by Location page.
<h3>ML_Visuals_Single_Select.js</h3> JavaScript coder for the visualization on the Machine Learning page.
<h3>PositionChart.js</h3> JavaScript code for the visualization on the Salaries and Job Titles page.

