import re

with open('index.html', 'r') as f:
    content = f.read()

# Fixing the Web Terminal to accept Nova.ask.user("name:" variable)
old_code = "if (val.includes('(\"name: \" + enter_your_name)')) {"
new_code = "if (val.includes('ask.user') && val.includes('name:')) {\n                        let varName = val.split(':')[1].replace(')', '').trim();\n                        out.innerHTML += `<div style=\"color: #3B82F6;\">[Input Prompt] name: ${varName || 'Initialized'}</div>`;\n"

content = content.replace(old_code, new_code)

with open('index.html', 'w') as f:
    f.write(content)

print("Web Terminal Fixed Successfully!")
