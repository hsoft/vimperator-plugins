/* Copyright 2015 Virgil Dupras
 *
 * This software is licensed under the "GPLv3" License as described in the "LICENSE" file,
 * which should be included with this package. The terms are also available at
 * http://www.gnu.org/licenses/gpl-3.0.html
 */

function findrel_and_open(relname) {
    let doc = config.browser.contentDocument;
    for (let link in util.evaluateXPath("//xhtml:a[@href and contains(@rel,'" + relname + "')]", doc)) {
        liberator.open(link.href);
        return true;
    }
    return false;
}

commands.add(["relnext"],
    "Opens the first found link with rel='next'",
    function() { findrel_and_open("next"); },
    {}
);
commands.add(["relprev"],
    "Opens the first found link with rel='prev'",
    function() { findrel_and_open("prev"); },
    {}
);

mappings.addUserMap([modes.NORMAL], ["<C-a>"],
    "Opens the first found link with rel='next'",
    function() {
        if (!findrel_and_open("next")) {
            Browser.incrementURL(1);
        }
    }
);
mappings.addUserMap([modes.NORMAL], ["<C-x>"],
    "Opens the first found link with rel='prev'",
    function() {
        if (!findrel_and_open("prev")) {
            Browser.incrementURL(-1);
        }
    }
);

