<script scoped lang="ts">
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      accordions: [
        {
          title: 'What is the donation about?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'How can make sure the funds I donated reached the people that need it?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'Where are your projects?',
          description:
            'Our projects exist where we find dedicated volunteers willing to reach out to the people around them. To name some, we are volunteering in Ethiopia, Belize, Uganda.',
        },
        {
          title: 'How do I actually donate?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
      ],
      steps: [
        {
          img: 'sign-up.png',
          title: 'Sign Up',
          description: 'Sign up for your free on web and follow our easy process to set up your profile',
        },
        {
          img: 'fund.png',
          title: 'Donate',
          description: 'Choose your preferred payment method such as bank transfer or credit card to donate to a village',
        },
        {
          img: 'buy-crypto.png',
          title: 'Keep Up-to-date',
          description:
            'Follow, share and comment our village volunteering updates to make sure your donation are used for the one who needed the most',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase">give hope for homeless</span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Helping each <span class="text-header-gradient">other make the</span> world better
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            We Seek out world changers and difference makers around the globe,and equip them to fulfill their unique purpose.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton class="max-w-full px-8 py-4 bg-gradient-to-r from-[#50855D] to-[#396242] border border-[#396242] text-white">
              Donate
            </BaseButton>
            <BaseButton class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#396242] flex items-center justify-center">
              <span>Join Our Village</span>
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full flex justify-center items-center h-full">
            <img data-aos="fade-up" data-aos-once="true" src="/img/hero-image.png" class="-mt-4 w-full max-w-[480px]" alt="" />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/ellipse-1.png"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/ellipse-2.png"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img data-aos="fade-up" data-aos-delay="300" src="/img/pattern/ellipse-3.png" class="hidden sm:block absolute bottom-56 right-24 w-6" />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/star.png"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Introduce village section -->
    <section id="intro" class="w-full my-24">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Meet the<br class="hidden sm:block" />
            People of Habte
          </h2>
          <p class="paragraph">
            Mary’s Missionaries began when hungry migrants fought over bread. After attempting to hand out bread to hungry migrants and needing rescue
            from the local shopkeepers from the ensuing melee, our first missionary realized that she needed to change her strategy...
          </p>
          <div class="space-y-6 lg:pr-12">
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Learn More About Each Village</BaseButton>
          </div>
        </div>
        <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section>

    <!-- Testimony section -->
    <section id="testimony" class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">Testimonials</h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <VillageSwiper />
        </div>
      </div>
    </section>

    <!-- Industry-leading security section -->
    <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="'/img/industry-leading-security.webp'" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Impact</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by
                the New York Department of Financial Services.
                <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm text-gray-700 leading-relaxed">With NEFA you can secure your account with a hardware security key via WebAuthn.</p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is <span class="underline">SOC 1 Type 2</span> and <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s
                first cryptocurrency exchange and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimony section -->
    <section id="testimony" class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">Testimonials</h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <BaseSwiper />
        </div>
      </div>
    </section>

    <!-- Future goals section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">Future Plans For Our <span class="text-header-gradient">Villages</span></h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Water</h4>
            <p class="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and
              constant uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Schools</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our
              WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Housing</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl text-white text-opacity-100">Header</h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Stoves</h4>
            <p class="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and
              constant uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Medical</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our
              WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Housing</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Campaign section -->
    <section class="w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="'/img/nefa-cc.webp'" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">Want your own project or village? Start a <span class="text-header-gradient">campaign</span>.</h2>
          <p class="paragraph">Click the button below to get to the village application.</p>
          <BaseButton class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#50855D] text-base"
            >Create campaign</BaseButton
          >
        </div>
      </BaseSection>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="/img/faq.webp" class="w-full" alt="" />
          </div>
        </div>
      </BaseSection>
    </section>

    <!-- Back To Top -->
    <div class="w-full my-10 flex justify-center">
      <a
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <Icon name="mdi:arrow-up" size="20" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #396242 -6.01%, #68A977 36.87%, #396242 78.04%, #396242 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-partner {
  background: url('../img/partner/background.png');
  background-size: cover;
  background-position: center;
}

.bg-trading-tools {
  background: url('../img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}

.max-h-0 {
  max-height: 0;
}
</style>
