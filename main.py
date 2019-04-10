import threading
from queue import Queue
from spider import Spider
from domain import *
from general import *

# Run the spider
directory_name = "Testing"
home_page = "http://peiernlim.dx.am/"
domain_name = get_domain(home_page)
queue_file = directory_name + "/Queue.txt"
crawled_file = directory_name + "/Crawled.txt"
number_of_threads = 8
queue_list = Queue()
Spider(directory_name, home_page, domain_name)


# Run the spider simultaneously using thread
def crawl_together():
    queue_links = sets(queue_file)
    if len(queue_links) > 0:
        print(str(len(queue_links)) + " links in the queue.")
        create_jobs()


# Create a job for every link
def create_jobs():
    for link in sets(queue_file):
        queue_list.put(link)
    queue_list.join()
    crawl_together()


# Create the spiders using thread
def create_spiders():
    for _ in range(number_of_threads):
        thread = threading.Thread(target=work)
        thread.daemon = True
        thread.start()


# Create the works that spiders need to do
def work():
    while True:
        url = queue_list.get()
        Spider.crawling(threading.current_thread().name, url)
        queue_list.task_done()


create_spiders()
crawl_together()