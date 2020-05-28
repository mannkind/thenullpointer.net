---
title: "Replacing Bootloader on the Pro Micro"
date: "2019-12-03T19:14:16-07:00"
---

I use Arduino Pro Micros in all my custom mechanical keyboards. A few months ago, after replacing my laptop, I discovered that I could no longer update the firmware on any of my keyboards. At the time it wasn't a big deal as I was just trying to keep up with QMK updates, but it became an issue when I wanted to start tweaking my layout.

After a bit of trial, error, and searching via Google I discovered that the culprit was USB3. Apparently the bootloader on the Arduino Pro Micro has a known issue with USB3. That said, the _solution_ seemed to be to use a computer with USB2 or a powered USB2 port; not exactly helpful.

However, this week I stumbled upon a Reddit post entitled [Replace Pro Micro bootloader with QMK DFU](https://www.reddit.com/r/olkb/comments/8sxgzb/replace_pro_micro_bootloader_with_qmk_dfu/). The QMK DFU bootloader should not only fix the USB3 issue, but provide additional features as well.

## Updating the Bootloader

I've replicated the most important bits from that Reddit post for future reference, in case it disappears from the internet.

1. Modify the keyboard's keymap config.h file to include the following QMK DFU defines.

    ```cl
    // Within keyboards/<keyboard>/keymaps/default/config.h
    #define QMK_LED        B0  // Built-in LED
    #define QMK_ESC_OUTPUT F4  // usually COL
    #define QMK_ESC_INPUT  D4  // usually ROW
    ```

2. Modify the keyboard's rules.mk file to make note of the bootloader change.

    ```makefile
    # Within keyboards/<keyboard>/rules.mk
    BOOTLOADER = qmk-dfu
    ```

3. Hookup the AVRISP to the Arduino Pro Micro (there are many guides online), and run the following commands:  

    ```bash
    # You'll need a working QMK Firmware, an AVRISP, and avrdude
    # Build the keyboard firmware, bootloader, and combination (bootloader + keyboard firmware)
    make <keyboard>:defaut:production

    # Upload the combination 
    avrdude -c stk500v2 -p m32u4 -P /dev/cu.usbmodem001568972 -U flash:w:"<keyboard>_default_production.hex":a -U lfuse:w:0x5E:m -U hfuse:w:0xD9:m -U efuse:w:0xC3:m -U lock:w:0x3F:m

    # Validate DFU works
    make <keyboard>:default:dfu
    ```

That's all it took to update the bootloader on all my Arduino Pro Micros and fix my USB3 issues!

Happy keyboard hacking!