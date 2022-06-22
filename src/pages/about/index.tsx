import { Breadcrumb, Header } from '@/components'
import { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => (
  <>
    <Header />
    <div className="mx-10 lg:mx-auto max-w-screen-md md:max-w-screen-lg">
      <div className="flex flex-col my-10 leading-relaxed">
        <Breadcrumb title="このサイトについて" />
        <h2 className="mt-4 text-2xl font-bold decoration-emerald-200">このサイトについて</h2>
        <div className="my-4 text-base md:text-lg">
          <p>通販サイトではありません。</p>
          <p>
            あくまでも、
            <Link href="https://twitter.com/smo_t93/">
              <a className="underline">もてぃ</a>
            </Link>
            が不用品を発信し、欲しい人がいれば買っていただく…というスタンスで情報提供する場として使用します。
          </p>
          <p>以下は実装していないので、ご留意の上購入お願いします。</p>
          <div className="my-3">
            <ul className="px-6 list-disc">
              <li>決済手段</li>
              <li>在庫のリアルタイム更新</li>
              <li>サイトからのお問い合わせ</li>
            </ul>
          </div>
          <p>
            サイトを見て何かおかしな点、不具合、バグ等ありましたら、
            <Link href="https://twitter.com/smo_t93/">
              <a className="underline">もてぃ</a>
            </Link>
            までお気軽にご連絡下さい。
          </p>
          <p>たぶんすぐ対応すると思います。たぶん。</p>
        </div>
        <h2 className="mt-4 text-2xl font-bold decoration-emerald-200">注意点</h2>
        <div className="my-3 text-base md:text-lg">
          <p>基本twitterDMで決済・配送のやり取りをする予定です。</p>
          <p>
            もちろん、<span className="bg-emerald-100">discord/facebook messenger/gmail/slack</span>
            など、他プラットフォームでの連絡も歓迎です。
          </p>
          <p>
            購入申請を行うと、もてぃへ
            <span className="bg-yellow-200">購入申請通知が来るようになっています。</span>
          </p>
          <p>購入者から連絡がきた段階で「販売中」から「商談中」に切り替えます（手動）</p>
          <p>
            <span className="bg-red-200">
              商談中に切り替わった後、30分以内に連絡が無い場合、販売中に戻させていただきます（手動）
            </span>
          </p>
          <p className="my-3">
            リアルタイムで在庫管理が出来ない都合上、
            <span className="bg-yellow-200">
              同時に申込みが複数入った場合誰に販売するかは私の方で判断させていただきます。
            </span>
          </p>
          <p>
            商談中ステータスで、受け渡し方法・価格・配送・商品の詳細等についてお互い相談します。この段階では原則、キャンセルが可能です。
          </p>
          <p>商談が確定し決済が完了した時点で「商談中」から「配送中」のステータスに切り替えます（手動）</p>
          <p>配送中になるとキャンセルはできないのでご注意下さい。</p>
          <p className="mt-3">
            配送はクロネコヤマトの
            <Link href="https://www.kuronekoyamato.co.jp/ytc/customer/send/sp/">
              <a className="underline">匿名配送（LINE）</a>
            </Link>
            でお願いします。
          </p>
          <p>
            商談中、相談の上で配送方法を変更することは可能です（
            <Link href="https://www.post.japanpost.jp/service/e_assist/receive_post.html">
              <a className="underline">ゆうパックの郵便局受取</a>
            </Link>
            など）
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-bold decoration-emerald-200">特定商取引法に基づく表示</h2>
        <div className="my-3 text-base md:text-lg">
          <p className="mt-2">通販サイトではないけど、書くとするなら以下です。</p>
          <p className="mt-2">
            <span className="font-bold">url：</span> https://shop.motty93.com
          </p>
          <p className="mt-2">
            <span className="font-bold">email：</span> rdwbocungelt5@gmail.com
          </p>
          <p className="mt-2">
            <span className="font-bold">販売価格：</span> 各販売ページの参考価格に基づき、協議のもと決定する
          </p>
          <p className="mt-2">
            <span className="font-bold">支払方法：</span> PayPay / LINE Pay / 銀行振込による先払い
          </p>
          <p className="mt-2">
            <span className="font-bold">商品代金以外の必要経費：</span>{' '}
            振込手数料、決済手数料、配送料などの支払い手数料
          </p>
          <p className="mt-2">
            <span className="font-bold">商品引渡し時期：</span> 販売者・購入者の協議のもと決定する
          </p>
          <p className="mt-2">
            <span className="font-bold">不良品について：</span> １週間以内であれば返品可能
          </p>
          <p className="mt-2">
            <span className="font-bold">返品について：</span> 不良品の場合を除いて不可
          </p>
          <p className="mt-2">
            ※上記以外の事項に関しましては、お取引の際に請求があれば遅延なく提示いたします。
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-bold decoration-emerald-200">プライバシーポリシー</h2>
        <div className="my-3 text-base md:text-lg">
          <p>商談のため購入希望者の住所・氏名・メールアドレス・LINE IDを収集します。</p>
          <p>この収集した情報は、shop.motty93.comにおける購入手続きの遂行以外には利用いたしません。</p>
        </div>
        <h2 className="mt-4 text-2xl font-bold decoration-emerald-200">技術スタック（興味ないと思うけど）</h2>
        <div className="my-3 text-base md:text-lg">
          <ul className="px-6 list-disc">
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>daisyUI</li>
            <li>Recoil</li>
            <li>microCMS</li>
            <li>Imgix</li>
            <li>Google Cloud Storage</li>
            <li>Vercel</li>
            <li>LINE Notify</li>
            <li>熟練の技術力（嘘）</li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default About
