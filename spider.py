from urllib.request import urlopen
from findLink import findLink
from general import *


# Get the HTML in the website
class Spider:

    # Global Variables that shared between all instances
    directory_name = ""
    base_url = ""
    domain_name = ""
    queue_file = ""
    crawled_file = ""
    queue_list = set()
    crawled_list = set()

    def __init__(self, directory_name, base_url, domain_name):
        Spider.directory_name = directory_name
        Spider.base_url = base_url
        Spider.domain_name = domain_name
        Spider.queue_file = Spider.directory_name + "/Queue.txt"
        Spider.crawled_file = Spider.directory_name + "/Crawled.txt"
        self.start()
        self.crawling("First Spider", Spider.base_url)

    @staticmethod
    def start():
        create_directory(Spider.directory_name)
        create_file(Spider.directory_name, Spider.base_url)
        Spider.queue_list = sets(Spider.queue_file)
        Spider.crawled_list = sets(Spider.crawled_file)

    @staticmethod
    def crawling(thread_name, page_url):
        if page_url not in Spider.crawled_list:
            print(thread_name + " now crawling " + page_url)
            print("Queue List: " + str(len(Spider.queue_list)))
            print("Crawled List: " + str(len(Spider.crawled_list)))
            Spider.add_links_to_queue(Spider.gather_links(page_url))
            Spider.queue_list.remove(page_url)
            Spider.crawled_list.add(page_url)
            Spider.update()
        else:
            print("The spider had already crawled that page.")

    @staticmethod
    def gather_links(page_url):
        html_string = ""
        try:
            response = urlopen(page_url)
            if response.getheader("Content-Type") == "text/html":
                html_bytes = response.read()
                html_string = html_bytes.decode("utf-8")
            finder = findLink(Spider.base_url, page_url)
            finder.feed(html_string)
        except:
            print("Crawling Process Encounters Error")
            return set()
        return finder.page_links()

    @staticmethod
    def add_links_to_queue(links):
        for url in links:
            if url in Spider.queue_list:
                continue
            if url in Spider.crawled_list:
                continue
            if Spider.domain_name not in url:
                continue
            Spider.queue_list.add(url)

    @staticmethod
    def update():
        store_sets(Spider.queue_list, Spider.queue_file)
        store_sets(Spider.crawled_list, Spider.crawled_file)
