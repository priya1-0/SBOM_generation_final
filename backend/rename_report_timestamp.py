#!/usr/bin/env python
# coding: utf-8

# In[10]:


import os

from datetime import datetime

# Source folder where the file exists
source_folder = 'C:/SBOM_DEMO/SBOM_MAY_v2/backend/Output'

# Destination folder where the file will be copied
destination_folder = 'C:/SBOM_DEMO/SBOM_MAY_v2/backend/Reports/Dependency_check_SoupList'

# Get the current date and time
current_time = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')

# Get the file name from the source folder
file_name = 'cyclonedx_sbom.xml' # Replace with the actual file name

# Create the new file name with the current date and time
new_file_name = f'{current_time}_{file_name}'

# Create the full path for the source file
source_file_path = os.path.join(source_folder, file_name)

# Create the full path for the destination file
destination_file_path = os.path.join(destination_folder, new_file_name)

# Copy the file to the destination folder with the new name
with open(source_file_path,'rb') as source_file:
    file_contents = source_file.read()
    with open(destination_file_path, 'wb') as destination_file:
        destination_file.write(file_contents)
        

# Print the path of the copied file
print(f'Copied file path: {destination_file_path}')


# In[ ]:




