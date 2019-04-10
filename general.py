import os


# Create new folder for each website crawled
def create_directory(directory):
    if not os.path.exists(directory):
        print("New Directory Created: " + directory)
        os.makedirs(directory)


# Create file to store the link
def create_file(name, address):
    queue = name + "/Queue.txt"
    crawled = name + "/Crawled.txt"
    if not os.path.isfile(queue):
        write(queue, address)
    if not os.path.isfile(crawled):
        write(crawled, '')


# Write the link into the file
def write(filename, address):
    file = open(filename, 'w')
    file.write(address)
    file.close()


# Add more links to existing file
def add_link(filename, address):
    with open(filename, 'a') as file:
        file.write(address + "\n")


# Delete links in the file
def delete_link(filename):
    with open(filename, 'w'):
        pass


# Store each links into a set item when crawling
def sets(filename):
    result = set()
    with open(filename, 'rt') as file:
        for links in file:
            result.add(links.replace("\n", ""))  # Remove the new line behind each links
    return result


# Store sets item into the file when crawled stopped or paused
def store_sets(links, filename):
    delete_link(filename)
    for link in sorted(links):
        add_link(filename, link)
