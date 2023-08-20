#!/usr/bin/env python
# coding: utf-8

# In[12]:


import os
import pandas as pd
from xml.dom import minidom

path = "C:/SBOM_DEMO/SBOM_MAY_v2/backend/Reports/Dependency_check_SoupList"
df = pd.DataFrame(columns = ['Component Name', ' Version'])

 
for filename in os.listdir(path):
    if filename.endswith(".xml"):

        file =  minidom.parse(path + '\\' +filename)
        components = file.getElementsByTagName('component')
        for component in components:
            name = component.getElementsByTagName('name')
            if (name.length > 0):
                component_name = name[0].firstChild.data
            else :
                component_name = ""
            version = component.getElementsByTagName('version')
            if (version.length > 0):
                component_version = version[0].firstChild.data
            else :
                component_version = ""
            df = df._append({'Component Name' : component_name, ' Version' : component_version}, ignore_index = True)
df = df.drop_duplicates()
df.to_excel(path + '\\' +"output.xlsx",index=False)


# In[ ]:




