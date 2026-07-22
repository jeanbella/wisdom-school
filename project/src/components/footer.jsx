import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-600 to-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                {/* <div className="flex flex-wrap justify-center items-center gap-3">
                    <span>© Copyright 2025 Wisdom School</span>
                    <span>|</span>
                    <a href="#privacy" className="hover:text-blue-700 transition underline">Privacy</a>
                    <span>|</span>
                    <a href="#cookies" className="hover:text-blue-700 transition underline">Cookie Policy</a>
                    <span>|</span>
                    <a href="#terms" className="hover:text-blue-700 transition underline">Terms of Use</a>
                </div> */}
            </div>
            {/* <div className="border-t border-slate-800"> */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">

                <p>© 2025 Wisdom Schools Rwanda</p>

                <p>All rights reserved</p>

                {/* </div> */}
            </div>
        </footer>
    );
}