'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function DentalLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2 text-lg font-bold" href="#">
            DentalCare
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Inicio
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Servicios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contacto
            </Link>
          </nav>
          <Button>Agendar Cita</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Encuentra tu mejor plan de pago en cuidado dental
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Acelera tus pagos
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Comenzar Ahora</Button>
                  <Button size="lg" variant="outline">
                    Saber Más
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
                <Image
                  alt="Dental Care"
                  className="aspect-video object-cover"
                  height={400}
                  src="https://sjc.microlink.io/PRxpEGAwtT_M4YmsRyxaWKLV1DALVqVWi09xAyLZGuqgxjdYBzgA0Lh3fHGW1HyPXP_4rRLGL0ZTRWFmwFTgtA.jpeg"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 dark:bg-green-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Nuestros servicios</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Encuentra a tu dentista</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Registra tu cita por medio de este sitio web.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Consulta gratis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Para tu primera consulta, accede a todos los tipos de servicios que ofrecemos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Encuentra una solucion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Recibe asesoria profesional para crear un plan medico propio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Nuestros precios</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Plan Básico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Cubre consultas y limpiezas regulares a bajo costo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plan Familiar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ideal para familias, incluye descuentos en tratamientos para varios miembros.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plan Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Acceso a servicios completos, desde ortodoncia hasta implantes con facilidades de pago.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Dental Consultation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                height={500}
                src="https://sjc.microlink.io/uI107o47J6CTDJiEeCkamgB9jik4g64Qky32aNrVHmnwBuBkLJtuWrhUnepU8NfnFQLnRGkMQ2yqGelUyu5qsw.jpeg"
                width={700}
              />
              <Image
                alt="Dental Treatment"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                height={500}
                src="https://sjc.microlink.io/N90_-sOviSdmxBdNOqf4uiUVwK5b0xnEtc-OdIdZi934HZx-RzcStA8pw8BiyKf-nOcC3wf1A7zc57HtvEJZAQ.jpeg"
                width={700}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center gap-2 px-4 md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed by David Chang
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created on October 30, 2024
          </p>
        </div>
      </footer>
    </div>
  )
}