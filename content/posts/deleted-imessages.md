---
title: "Deleted iMessages"
date: "2020-04-28T21:55:23-07:00"
---

I have every text my wife and I have sent each other since the moment we started texting. That's nearly 10 years of messages throughout various stages of our relationship spanning multiple devices.

And today, due to negligence, I deleted all of them on my phone ... and all my other devices due to iCloud sync. 

😢

## Restoration Attempt No. 1

My first attempt to restore the messages was an absolute waste of time. I attempted to restore the messages by restoring my iPhone from an iCloud backup. 

that. 👏. does. 👏. not. 👏. work.

Apparently iMessages are not in the iCloud backup if you are using iCloud sync.

## Restoration Attempt No. 2

My second attempt did not resolve the issue, but it did bring me closer to my goal. I attempted to restore the iMessage database via Time Machine on my MacBook Pro.

that. 👏. does. 👏. not. 👏. work.

While I could see the old messages on the MacBook Pro, syncing between my iPhone and the MacBook Pro was completely hosed. I was unable to enable/disable iMessage iCloud syncing until I deleted everything on both devices.

_le sigh_

## Restoration Attempt No. 3

My third attempt ended up working, but it's a bit **brute force**. I'll try to keep the steps as straight-forward as possible.

* Use the terminal to install SQLite3 on a Mac; `brew install sqlite` worked for me.
* Disable iMessage iCloud syncing on all devices via iMessage Settings.
* Restore ~/Library/Messages on a Mac via Time Machine (override the existing folder).
* Restart the Mac.
* Use iMessage to delete all chat's that you don't want to re-sync via iCloud sync.
* Use SQLite to open the iMessage database; `sqlite3 ~/Library/Messages/chat.db`
* Use the following SQL to remove the flags that indicate iMessage iCloud sync has already occurred. Please note that this may be overkill, but appears to work.

   ```sql
    update chat set ck_sync_state = 0;
    update message set ck_sync_state = 0, ck_record_id = '', ck_record_change_tag = '';
    update attachment set ck_sync_state = 0, ck_record_id = '';
   ```
* Enable iMessage iCloud syncing on all devices via iMessage Settings.
* Wait for the messages to re-sync between all devices.


## Update 2020-05-14

It turns out I accidentally deleted the messages again. 

**What an idiot.**

Thankfully I have these instructions to help restore the messages again. 😅
