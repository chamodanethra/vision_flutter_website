"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [copiedCommand, setCopiedCommand] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedCommand(true);
        setTimeout(() => setCopiedCommand(false), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-pink-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 font-sans">
                {/* Navbar */}
                <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
                    <a href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logo.jpg"
                            alt="Vision Flutter Logo"
                            width={40}
                            height={40}
                            className="rounded-lg group-hover:scale-105 transition-transform"
                        />
                        <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Vision Flutter
                        </span>
                    </a>
                    <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
                        <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                        <a href="#security" className="hover:text-white transition-colors">Security</a>
                        <a href="https://pub.dev/packages/biometric_signature" target="_blank" className="hover:text-white transition-colors">Pub.dev ↗</a>
                    </div>
                    <a
                        href="https://github.com/chamodanethra/biometric_signature"
                        target="_blank"
                        className="px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all backdrop-blur-sm flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        GitHub
                    </a>
                </nav>

                {/* Hero Section */}
                <section className="pt-16 pb-24 px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span>v8.5.0 — iOS • Android • macOS</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Hardware-Backed<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                Biometric Signatures
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
                            Create cryptographic signatures using device biometrics with keys stored in
                            <span className="text-white font-medium"> Secure Enclave</span> (iOS/macOS) and
                            <span className="text-white font-medium"> StrongBox/Keystore</span> (Android).
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <a
                                href="https://pub.dev/packages/biometric_signature"
                                target="_blank"
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)]"
                            >
                                View on Pub.dev
                            </a>
                            <button
                                onClick={() => copyToClipboard("flutter pub add biometric_signature")}
                                className="w-full sm:w-auto px-6 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 font-mono text-sm rounded-full border border-zinc-700 transition-all flex items-center justify-center gap-3 group"
                            >
                                <span className="text-zinc-500">$</span>
                                flutter pub add biometric_signature
                                <span className="text-zinc-500 group-hover:text-blue-400 transition-colors">
                                    {copiedCommand ? "✓" : "⎘"}
                                </span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-8 px-6 border-y border-white/5 bg-zinc-900/20 backdrop-blur-sm">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">RSA + EC</div>
                            <div className="text-sm text-zinc-500 mt-1">Key Algorithms</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">3</div>
                            <div className="text-sm text-zinc-500 mt-1">Platforms Supported</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">ECIES</div>
                            <div className="text-sm text-zinc-500 mt-1">Hybrid Encryption</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">100%</div>
                            <div className="text-sm text-zinc-500 mt-1">Hardware Secured</div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bank-Grade Security. Developer-Friendly API.</h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">Everything you need to implement secure biometric authentication in your Flutter app.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Hardware Security",
                                    desc: "Keys are generated and stored in Secure Enclave (iOS/macOS) and StrongBox/Keystore (Android). Private keys never leave the secure hardware.",
                                    icon: "🔐",
                                    gradient: "from-purple-500/20 to-blue-500/20"
                                },
                                {
                                    title: "Cryptographic Signatures",
                                    desc: "Create RSA-2048 or ECDSA (P-256) signatures that your backend can independently verify. True proof of identity.",
                                    icon: "✍️",
                                    gradient: "from-blue-500/20 to-cyan-500/20"
                                },
                                {
                                    title: "ECIES Decryption",
                                    desc: "Decrypt sensitive data using hybrid ECIES encryption with X9.63 key derivation, SHA-256, and AES-GCM.",
                                    icon: "🔓",
                                    gradient: "from-cyan-500/20 to-green-500/20"
                                },
                                {
                                    title: "Biometric Authentication",
                                    desc: "Seamless integration with FaceID, TouchID, and Android BiometricPrompt. Native UI on every platform.",
                                    icon: "👆",
                                    gradient: "from-green-500/20 to-yellow-500/20"
                                },
                                {
                                    title: "Key Invalidation",
                                    desc: "Optionally invalidate keys when biometric enrollment changes. Detect if fingerprints or Face ID have been modified.",
                                    icon: "🚫",
                                    gradient: "from-yellow-500/20 to-orange-500/20"
                                },
                                {
                                    title: "Device Credential Fallback",
                                    desc: "Allow PIN, pattern, or password fallback on Android when biometrics are unavailable.",
                                    icon: "🔢",
                                    gradient: "from-orange-500/20 to-red-500/20"
                                }
                            ].map((feature, i) => (
                                <div key={i} className={`p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/5 hover:border-white/10 transition-all hover:scale-[1.02] group`}>
                                    <div className="text-4xl mb-6">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Support */}
                <section id="platforms" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Platform Support</h2>
                            <p className="text-zinc-400">Native implementation on every platform. No compromises.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-white/5 overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                                        🍎
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">iOS</h3>
                                    <ul className="space-y-3 text-sm text-zinc-400">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Secure Enclave
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Face ID & Touch ID
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> RSA & ECDSA signing
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Keychain storage
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-white/5 overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                                        🤖
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Android</h3>
                                    <ul className="space-y-3 text-sm text-zinc-400">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> StrongBox / Keystore
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> BiometricPrompt API
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Device credential fallback
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Custom UI options
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-white/5 overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                                        💻
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">macOS</h3>
                                    <ul className="space-y-3 text-sm text-zinc-400">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Secure Enclave
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Touch ID on supported Macs
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> ECDSA P-256 keys
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span> Keychain integration
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works / Workflow */}
                <section id="how-it-works" className="py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Workflow</h2>
                            <p className="text-zinc-400">From enrollment to verified signature in four steps.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Create Keys",
                                    desc: "Generate hardware-backed key pair with biometric protection.",
                                    color: "blue"
                                },
                                {
                                    step: "02",
                                    title: "Register Public Key",
                                    desc: "Send the public key to your backend for future verification.",
                                    color: "purple"
                                },
                                {
                                    step: "03",
                                    title: "Sign Data",
                                    desc: "User authenticates, hardware signs the payload.",
                                    color: "pink"
                                },
                                {
                                    step: "04",
                                    title: "Verify Signature",
                                    desc: "Backend verifies the signature using the stored public key.",
                                    color: "green"
                                }
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-zinc-700 to-transparent"></div>
                                    )}
                                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 relative z-10">
                                        <div className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`}>
                                            {item.step}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-sm text-zinc-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Code Examples */}
                <section id="security" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Clean, Intuitive API</h2>
                                <p className="text-lg text-zinc-400 mb-8">
                                    Integrate secure biometric signatures in minutes with our well-documented API.
                                    Full platform customization when you need it.
                                </p>
                                <ul className="space-y-4 text-zinc-300">
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-500 flex items-center justify-center text-sm">✓</div>
                                        <span>Type-safe Dart API with null safety</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-500 flex items-center justify-center text-sm">✓</div>
                                        <span>Platform-specific configuration options</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-500 flex items-center justify-center text-sm">✓</div>
                                        <span>Comprehensive error handling</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-500 flex items-center justify-center text-sm">✓</div>
                                        <span>Backend examples in Node.js, Python & Go</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative rounded-xl bg-[#0a0a0f] border border-white/10 p-6 shadow-2xl overflow-hidden">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                            </div>
                                            <span className="text-xs text-zinc-600">create_keys.dart</span>
                                        </div>
                                        <pre className="font-mono text-sm overflow-x-auto text-zinc-300">
                                            <code>{`// Create biometric-protected keys
final result = await BiometricSignature()
  .createKeys(
    enforceBiometric: true,
    promptMessage: "Authenticate to register",
  );

if (result != null) {
  // Send public key to your backend
  await api.registerPublicKey(result.publicKey);
}`}</code>
                                        </pre>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative rounded-xl bg-[#0a0a0f] border border-white/10 p-6 shadow-2xl overflow-hidden">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                            </div>
                                            <span className="text-xs text-zinc-600">sign_data.dart</span>
                                        </div>
                                        <pre className="font-mono text-sm overflow-x-auto text-zinc-300">
                                            <code>{`// Sign a challenge from your server
final signature = await BiometricSignature()
  .createSignature(
    options: SignatureOptions(
      payload: serverChallenge,
      promptMessage: "Confirm transaction",
    ),
  );

// Send signature to backend for verification`}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to add <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">hardware-backed security</span>?
                        </h2>
                        <p className="text-xl text-zinc-400 mb-10">
                            Get started in minutes. Check out the documentation and example app.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://pub.dev/packages/biometric_signature"
                                target="_blank"
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]"
                            >
                                Read Documentation
                            </a>
                            <a
                                href="https://github.com/chamodanethra/biometric_signature/tree/master/example"
                                target="_blank"
                                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold rounded-full border border-zinc-700 transition-all"
                            >
                                View Example App
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-6 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-12 mb-12">
                            <div className="md:col-span-2">
                                <a href="/" className="flex items-center gap-3 mb-4 group">
                                    <Image
                                        src="/logo.jpg"
                                        alt="Vision Flutter Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-lg group-hover:scale-105 transition-transform"
                                    />
                                    <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                        Vision Flutter
                                    </span>
                                </a>
                                <p className="text-zinc-500 text-sm max-w-md">
                                    Building secure, high-quality Flutter plugins. biometric_signature is our flagship plugin for hardware-backed biometric authentication.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Resources</h4>
                                <ul className="space-y-2 text-sm text-zinc-500">
                                    <li><a href="https://pub.dev/packages/biometric_signature" target="_blank" className="hover:text-white transition-colors">Documentation</a></li>
                                    <li><a href="https://github.com/chamodanethra/biometric_signature" target="_blank" className="hover:text-white transition-colors">GitHub Repository</a></li>
                                    <li><a href="https://pub.dev/packages/biometric_signature/changelog" target="_blank" className="hover:text-white transition-colors">Changelog</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Links</h4>
                                <ul className="space-y-2 text-sm text-zinc-500">
                                    <li><a href="https://pub.dev/publishers/visionflutter.com" target="_blank" className="hover:text-white transition-colors">Pub.dev Publisher</a></li>
                                    <li><a href="https://visionflutter.com" target="_blank" className="hover:text-white transition-colors">visionflutter.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                            <p>© {new Date().getFullYear()} Vision Flutter. All rights reserved.</p>
                            <p>Made with 💜 for the Flutter community</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
