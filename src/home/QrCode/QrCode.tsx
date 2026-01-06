"use client";
import React from "react";
import Image from "next/image";

import qrImage from "../../assest/qr_code_pan_3ff96b7425.webp";

const QrCode = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* QR IMAGE */}
                <div className="flex justify-center mb-6">
                    <Image
                        src={qrImage}
                        alt="QR Code"
                        width={130}
                        height={130}
                        className="object-contain"
                    />
                </div>

                {/* REGISTRATION NUMBER */}
                <p className="text-[21px] font-medium text-[#333] mb-4" style={{ fontWeight: "400" }}>
                    P52100029836
                </p>

                {/* WEBSITE INFO */}
                <p className="text-[21px] font-medium text-[#333]" style={{ fontWeight: "400" }}>
                    For More Details Visit The Website:{" "}
                    <a
                        href="https://maharera.mahaonline.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#BF843D] hover:underline"
                    >
                        https://maharera.mahaonline.gov.in
                    </a>
                </p>
            </div>
        </section>
    );
};

export default QrCode;
